from datetime import datetime
import base64
from fastapi import APIRouter, Depends, UploadFile, File, HTTPException, Header
from app.models.report import ReportResponse, ReportsGet, UploadResponse
from app.routes.auth import require_login
from app.tags import TAGS
from app.db import conn
from datetime import datetime

reports_routes = APIRouter()


@reports_routes.get("/", tags=[TAGS.REPORTS], response_model=ReportsGet)
async def get_user_reports(user=Depends(require_login)):
    pipeline = [
        {
            "$match": {"owner": user["_id"]}
        },
        {
            "$lookup":
            {
                "localField": "image",
                "from": "images",
                "foreignField": "_id",
                "as": "image",
                "pipeline": [
                    {
                        "$project": {
                            "image": 1
                        },
                    },
                ]
            },
        },
        {
            "$addFields": {
                "image": {"$arrayElemAt": ["$image.image", 0]}
            }
        },
        {
            "$project": {
                "owner": 0,
            }
        }
    ]
    reports = [report for report in conn.reports.aggregate(pipeline)]

    for report in reports:
        report["id"] = str(report["_id"])
        report["image"] = report["image"].decode("utf-8")

    return ReportsGet(reports=[ReportResponse(**report) for report in reports])


@reports_routes.post("/", tags=[TAGS.REPORTS])
async def create_report(user=Depends(require_login)):
    pass


async def valid_content_length(content_length: int = Header(lt=10*1024*1024)):
    return content_length


@reports_routes.post("/upload", tags=[TAGS.REPORTS], response_model=UploadResponse)
async def upload_report(user=Depends(require_login),
                        in_file: UploadFile = File(description="An image (png, jpeg or jpg) of the report under 10MB"),
                        file_size: int = Depends(valid_content_length)):
    file_extension = in_file.filename.split('.')[-1]
    file_extension = file_extension.lower()
    if file_extension not in ['png', 'jpg', 'jpeg']:
        raise HTTPException(
            status_code=400, detail="Invalid file type must be one of (png, jpeg or jpg)")

    encoded_img = base64.b64encode(await in_file.read()).decode('utf-8')
    to_save_binary = f'data:image/{file_extension};base64,{encoded_img}'.encode('utf-8')
    insert_img_result = conn.images.insert_one({
        "owner": user["_id"],
        "image": to_save_binary
    })

    if not insert_img_result.inserted_id:
        raise HTTPException(status_code=500, detail="Failed to upload image")

    insert_result = conn.reports.insert_one({
        "owner": user["_id"],
        "image": insert_img_result.inserted_id,
        "created_at": datetime.utcnow()
    })

    return {
        "id": str(insert_result.inserted_id)
    }
