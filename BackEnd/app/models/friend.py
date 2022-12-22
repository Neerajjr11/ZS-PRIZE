from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Union
from app.models.user import UserBase


class FriendRequestSend(BaseModel):
    email: EmailStr


class FriendRequest(BaseModel):
    id: str
    sender: str
    receiver: Union[str, None] = None
    created_at: datetime

    class Config:
        orm_mode = True


class FriendRequests(BaseModel):
    requests: list[FriendRequest]


class FriendRequestApproval(BaseModel):
    id: str
    accepted: bool


class Friend(BaseModel):
    name: str
    email: str


class Friends(BaseModel):
    friends: list[Friend]

    class Config:
        orm_mode = True
