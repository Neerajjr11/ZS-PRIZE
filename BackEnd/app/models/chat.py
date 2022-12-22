from pydantic import BaseModel


class Chat(BaseModel):
    text: str
