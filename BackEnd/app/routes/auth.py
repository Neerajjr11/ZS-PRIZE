from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from datetime import datetime
import fastapi
import bcrypt
from app.jwt import decodeJWT, signJWT
from app.db import conn
from app.models.auth import ExchangeToken, Token, Login
from app.models.user import (UserSignupParams, UserSignupResponse)
from bson.objectid import ObjectId
from app.tags import TAGS
from google.oauth2 import id_token
from google.auth.transport import requests
from app.config import settings

auth_routes = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")


async def require_login(token: str = Depends(oauth2_scheme)):
    invalid_exception = HTTPException(
        status_code=fastapi.status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    token = decodeJWT(token)
    if token is None:
        raise invalid_exception

    user = conn.users.find_one({"_id": ObjectId(token["sub"])}, {"_id": 1})
    if user is None:
        raise invalid_exception

    user["id"] = str(user["_id"])
    return user


@auth_routes.post("/signup", tags=[TAGS.AUTH],
                  response_model=UserSignupResponse)
async def signup_local(params: UserSignupParams):
    # Check if user with same email exists
    existing_user = conn.users.find_one({"email": params.email}, {"_id": 1})

    if existing_user is not None:
        raise HTTPException(status_code=400, detail="Email is already used")

    to_insert_user = params.dict()
    to_insert_user["password"] = bcrypt.hashpw(params.password.encode("utf-8"), bcrypt.gensalt(10))
    to_insert_user['created_at'] = datetime.utcnow()

    conn.users.insert_one(to_insert_user)

    to_insert_user["id"] = str(to_insert_user["_id"])
    token = signJWT(to_insert_user["id"])

    return UserSignupResponse(**to_insert_user, token=token)


@auth_routes.post("/token", tags=[TAGS.AUTH], response_model=Token)
async def login_form(data: OAuth2PasswordRequestForm = Depends()):
    return await _login_local(data)


@auth_routes.post("/login", tags=[TAGS.AUTH], response_model=Token)
async def login(data: Login):
    return await _login_local(data)


async def _login_local(data):
    invalid_exception = HTTPException(
        status_code=fastapi.status.HTTP_401_UNAUTHORIZED, detail="Credentials are invalid")
    existing = conn.users.find_one(
        {"email": data.username},
        {"_id": 1, "password": 1, "provider": 1})
    if existing is None:
        raise invalid_exception

    if "provider" in existing:
        raise HTTPException(status_code=fastapi.status.HTTP_401_UNAUTHORIZED,
                            detail="User signed up with OAuth")

    if not bcrypt.checkpw(data.password.encode("utf-8"), existing["password"]):
        raise invalid_exception

    existing["id"] = str(existing["_id"])
    return signJWT(str(existing["id"]))


@auth_routes.post("/oauth-exchange", tags=[TAGS.AUTH], response_model=Token)
async def exchange_token(params: ExchangeToken):
    try:
        idinfo = id_token.verify_oauth2_token(
            params.id_token,
            requests.Request(),
            settings.GOOGLE_CLIENT_ID)
        user = {
            "email": idinfo["email"],
            "name": idinfo["name"],
            "photo_url": idinfo["picture"],
            "provider": "google"
        }

        existing = conn.users.find_one({
            "email": user["email"]
        }, {"email": 1, "provider": 1, "_id": 1})

        if existing is not None and "provider" not in existing:
            # User exists but is not a google user
            raise HTTPException(status_code=400, detail="User signed up with email and password")

        if existing is not None and "provider" in existing and existing["provider"] == "google":
            # Google account exists
            conn.users.update_one({
                "email": user["email"],
                "provider": "google"
            }, {
                "$set": {
                    "name": user["name"],
                    "photo_url": user["photo_url"]
                }
            })
            user["id"] = str(existing["_id"])
        else:
            # Create new account
            user["created_at"] = datetime.utcnow()
            conn.users.insert_one(user)
            user["id"] = str(user["_id"])

        token = signJWT(user["id"])
        return token.dict()
    except Exception as e:
        raise e
        raise HTTPException(status_code=400, detail="Invalid oauth token")
