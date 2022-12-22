import jwt
from datetime import datetime, timedelta
from app.config import settings
from app.models.auth import Token, TokenData


def signJWT(user_id: str):
    payload = {
        "sub": user_id,
        "iat": datetime.utcnow(),
        "exp": datetime.utcnow()
        + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRES_IN_M),
    }

    token = jwt.encode(payload, settings.JWT_SECRET,
                       algorithm=settings.JWT_ALGORITHM)
    return Token(access_token=token)


def decodeJWT(token: str) -> TokenData:
    try:
        decoded = jwt.decode(
            token, settings.JWT_SECRET, algorithms=[settings.JWT_ALGORITHM]
        )
        if decoded["exp"] > datetime.utcnow().timestamp():
            return TokenData(**decoded).dict()
        return None
    except jwt.PyJWTError:
        pass
    return None
