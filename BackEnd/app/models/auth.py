from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str = "Bearer"


class TokenData(BaseModel):
    sub: str
    iat: int
    exp: int


class ExchangeToken(BaseModel):
    id_token: str


class Login(BaseModel):
    username: str
    password: str
