from fastapi import FastAPI
from app.routes.auth import auth_routes
from app.routes.reports import reports_routes
from app.routes.chat import chat_routes
from app.routes.friends import friends_routes
from app.tags import tags_metadata
from fastapi.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware

origins = ["http://localhost:5173", "http://127.0.0.1:5173", "*"]
middleware = [
    Middleware(
        CORSMiddleware, allow_origins=origins, allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "DELETE", "*"],
        allow_headers=["*"])]

app = FastAPI(title="ZS Prize Hackathon API", description="ZS Prize Hackathon API",
              openapi_tags=tags_metadata, middleware=middleware)

app.include_router(auth_routes, prefix="/auth")
app.include_router(reports_routes, prefix="/reports")
app.include_router(chat_routes, prefix="/chat")
app.include_router(friends_routes, prefix="/friends")


@app.get("/")
async def home():
    return {
        "message": f"ZS Prize Hackathon API is running.Check out /docs, /redoc or /openapi.json"
    }
