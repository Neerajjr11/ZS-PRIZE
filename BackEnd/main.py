import uvicorn
import dotenv
import os

dotenv.load_dotenv()

if __name__ == "__main__":
    uvicorn.run("app.app:app", host="0.0.0.0", port=int(os.environ.get("PORT", 8000)), log_level="info", reload=os.environ.get("RELOAD_APP", False))
