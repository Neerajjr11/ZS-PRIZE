from pydantic import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str
    DATABASE_NAME: str

    GOOGLE_CLIENT_ID: str

    REFRESH_TOKEN_EXPIRES_IN_M: int
    ACCESS_TOKEN_EXPIRES_IN_M: int
    JWT_ALGORITHM: str
    JWT_SECRET: str

    class Config:
        env_file = "./.env"


settings = Settings()
