import time
from fastapi import APIRouter, Depends
from app.models.chat import Chat
from app.routes.auth import require_login
from app.tags import TAGS
from app.db import conn

chat_routes = APIRouter()

MAX_CHAT_HISTORY = 5000


@chat_routes.post("/", tags=[TAGS.CHAT], response_model=Chat)
async def chat(params: Chat, user=Depends(require_login)):
    print(params.text)
    conn.users.update_one({"_id": user["_id"]}, {
        "$push": {
            "chat_history": {
                "$each": [{
                    "text": params.text,
                }],
                "$slice": -MAX_CHAT_HISTORY
            }
        }
    })
    # TODO: remove this delay
    time.sleep(3)

    # TODO: Call AI model here
    return {"text": "Hello World"}
