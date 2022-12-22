from datetime import datetime
from pydantic import BaseModel, Field
from typing import Union

class ReportAttribute(BaseModel):
    name: str
    value: float


class UploadResponse(BaseModel):
    id: Union[str, None] = None
    fields: Union[list[ReportAttribute], None] = None


class ReportBase(BaseModel):
    # image: str
    fields: Union[list[ReportAttribute], None] = None
    created_at: Union[datetime, None] = None

    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "image": "base64 image",
                "created_at": datetime.utcnow(),
                "fields": [{"name": "field name", "value": 0.0}],
            }
        }


class ReportResponse(ReportBase):
    id: str


class ReportsGet(BaseModel):
    reports: list[ReportResponse] = Field(default_factory=list)
