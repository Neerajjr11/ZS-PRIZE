# MEDHEAD - Backend

### FastAPI based REST API for MEDHEAD.

<img alt="Python3" src="https://img.shields.io/badge/-Python 3-313131?style=for-the-badge&logo=python&logoWidth=20&logoColor=white" />&nbsp;<img alt="FastAPI" src="https://img.shields.io/badge/-FastAPI-313131?style=for-the-badge&logo=FastAPI&logoWidth=20&logoColor=white" />&nbsp;<img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-313131?style=for-the-badge&logo=MongoDB&logoWidth=20&logoColor=white" />&nbsp;<img alt="Google" src="https://img.shields.io/badge/-Google-313131?style=for-the-badge&logo=Google&logoWidth=20&logoColor=white" />

### [Deployed backend Link](https://zsapi.delanolourenco.xyz/docs)

## Getting Started

1. ### Install python dependencies:

   ```bash
    pip install -r requirements.txt
   ```

1. ### Duplicate `.env-sample` and rename to `.env` and edit the values in the `.env` file.


1. ### Run the server in DEV mode:
   ```bash
    python main.py
   ```

1. ### View docs at http://localhost:8000/docs and OpenAPI JSON at http://localhost:8000/openapi.json

1. ### To run the server in production mode:
   ```bash
    uvicorn app.app:app
   ```