#!/bin/bash
gunicorn -k uvicorn.workers.UvicornWorker app.app:app -b 0.0.0.0:80
