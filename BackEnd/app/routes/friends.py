import fastapi
from fastapi import APIRouter, Depends, HTTPException
from app.models.friend import FriendRequestApproval, FriendRequest, FriendRequestSend, FriendRequests, Friends
from app.routes.auth import require_login
from app.tags import TAGS
from app.db import conn
from datetime import datetime
from bson.objectid import ObjectId

friends_routes = APIRouter()


@friends_routes.post("/send", tags=[TAGS.FRIENDS], response_model=FriendRequest)
async def send_request(params: FriendRequestSend, user=Depends(require_login)):
    failed_to_send_request = HTTPException(
        status_code=fastapi.status.HTTP_400_BAD_REQUEST, detail="Failed to send friend request")
    already_sent_request = HTTPException(status_code=fastapi.status.HTTP_400_BAD_REQUEST,
                                         detail="Friend request already sent")
    already_friends = HTTPException(status_code=fastapi.status.HTTP_400_BAD_REQUEST,
                                    detail="Already friends with user")
    params.email = params.email.lower()

    # Check if receiver exists
    receiver = conn.users.find_one({
        "email": params.email
    }, {"_id": 1, "email": 1})

    if receiver is None or user["_id"] == receiver["_id"]:
        raise failed_to_send_request

    # Check if already sent a friend request to the receiver
    if conn.friend_requests.find_one({
        "sender": user["_id"],
        "receiver": receiver["_id"]
    }) is not None:
        raise already_sent_request

    # Check if already friends
    if conn.users.find_one({
        "_id": user["_id"],
        "friends": receiver["_id"]
    }) is not None:
        raise already_friends

    # Insert the friend request
    friend_request = {
        "sender": user["_id"],
        "receiver": receiver["_id"],
        "created_at": datetime.utcnow()
    }

    inserted_result = conn.friend_requests.insert_one(friend_request)
    friend_request["id"] = str(inserted_result.inserted_id)
    friend_request["sender"] = str(friend_request["sender"])
    friend_request["receiver"] = str(friend_request["receiver"])
    return FriendRequest(**friend_request)


@friends_routes.get("/requests", tags=[TAGS.FRIENDS], response_model=FriendRequests)
async def get_pending_requests(user=Depends(require_login)):
    friend_requests = [i for i in conn.friend_requests.aggregate([
        {
            "$match": {
                "receiver": user["_id"]
            }
        },
        {
            "$project": {
                "receiver": 0
            }
        },
        {
            "$lookup": {
                "from": "users",
                "localField": "sender",
                "foreignField": "_id",
                "as": "sender",
                "pipeline": [
                    {
                        "$project": {
                            "email": 1
                        }
                    }
                ]
            }
        },
        {
            "$addFields": {
                "sender": {"$arrayElemAt": ["$sender.email", 0]}
            }
        }
    ])]

    for i in friend_requests:
        i["id"] = str(i["_id"])

    return FriendRequests(
        requests=[FriendRequest(**friend_request)
                  for friend_request in friend_requests]).dict()


@friends_routes.patch("/approval", tags=[TAGS.FRIENDS],
                      status_code=204, response_class=fastapi.Response)
async def friend_request_approval(params: FriendRequestApproval, user=Depends(require_login)):
    existing_request = conn.friend_requests.find_one({
        "_id": ObjectId(params.id),
        "receiver": user["_id"]
    })

    # Check if request exists
    if existing_request is None:
        raise HTTPException(status_code=fastapi.status.HTTP_400_BAD_REQUEST,
                            detail="Friend request does not exist")

    # Check if friends
    if conn.users.find_one({
        "_id": user["_id"],
        "friends": existing_request["sender"]
    }) is not None:
        raise HTTPException(status_code=fastapi.status.HTTP_400_BAD_REQUEST,
                            detail="Already friends with user")

    if params.accepted:
        # Delete any reverse friend request
        conn.friend_requests.delete_one({
            "sender": ObjectId(existing_request["receiver"]),
            "receiver": ObjectId(existing_request["sender"])
        })
        # Add the user ids to each other
        conn.users.update_one({"_id": ObjectId(existing_request["sender"])}, {
            "$push": {
                "friends": ObjectId(existing_request["receiver"])
            }
        })
        conn.users.update_one({"_id": ObjectId(existing_request["receiver"])}, {
            "$push": {
                "friends": ObjectId(existing_request["sender"])
            }
        })

    conn.friend_requests.delete_one({"_id": ObjectId(params.id)})


@friends_routes.get("/", tags=[TAGS.FRIENDS], response_model=Friends)
async def get_friends(user=Depends(require_login)):
    friends = [i for i in conn.users.aggregate([
        {
            "$match": {
                "_id": user["_id"]
            }
        },
        {
            "$project": {
                "friends": 1
            }
        },
        {
            "$lookup": {
                "from": "users",
                "localField": "friends",
                "foreignField": "_id",
                "as": "friends",
                "pipeline": [
                    {
                        "$project": {
                            "email": 1,
                            "name": 1
                        }
                    }
                ]
            }
        },
        {
            # Select only the email and name of friends
            "$addFields": {
                "friends": {"$map": {
                    "input": "$friends",
                    "as": "friend",
                    "in": {
                        "email": "$$friend.email",
                        "name": "$$friend.name"
                    }
                }}
            }
        }
    ])]
    return Friends(friends=friends[0]["friends"])
