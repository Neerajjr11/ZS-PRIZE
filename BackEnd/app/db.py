from pymongo import mongo_client
import pymongo
from app.config import settings

client = mongo_client.MongoClient(
    settings.DATABASE_URL, serverSelectionTimeoutMS=5000)

try:
    info = client.server_info()
    print(f'Connected to MongoDB {info.get("version")}')
except Exception:
    print("Unable to connect to the MongoDB server.")

conn = client[settings.DATABASE_NAME]

conn.reports.create_index([("owner", pymongo.ASCENDING)])
conn.images.create_index([("owner", pymongo.ASCENDING)])
conn.users.create_index([("email", pymongo.ASCENDING)], unique=True)
