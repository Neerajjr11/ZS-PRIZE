from datetime import datetime
from pydantic import BaseModel, EmailStr, constr
from typing import Union
from app.models.auth import Token


class UserBase(BaseModel):
    name: str
    email: EmailStr
    created_at: Union[datetime, None] = None
    photo_url: Union[str, None] = None

    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john.doe@email.com",
                "created_at": datetime.utcnow(),
            }
        }


class UserSignupParams(BaseModel):
    name: str
    email: EmailStr
    password: constr(min_length=8)


class UserLogin(BaseModel):
    email: EmailStr
    password: constr(min_length=8)


class UserGet(UserBase):
    id: str


class UserSignupResponse(UserGet):
    token: Token


class UserLoginResponse(UserGet):
    token: Token
