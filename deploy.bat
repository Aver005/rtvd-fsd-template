@echo off
setlocal

:: Default values
set "DEPLOY_HOST=127.0.0.1"
set "DEPLOY_USER=root"
set "DEPLOY_KEY=C:\ssh\key"
set "DEPLOY_PATH=folder-name"
set "DEPLOY_COMMAND=docker compose up --build -d"

:: Read from .env and .env.local
for %%F in (.env .env.local) do (
    if exist "%%F" (
        for /f "usebackq tokens=1,* delims==" %%A in ("%%F") do (
            if /i "%%A"=="DEPLOY_HOST" set "DEPLOY_HOST=%%B"
            if /i "%%A"=="DEPLOY_USER" set "DEPLOY_USER=%%B"
            if /i "%%A"=="DEPLOY_KEY" set "DEPLOY_KEY=%%B"
            if /i "%%A"=="DEPLOY_PATH" set "DEPLOY_PATH=%%B"
            if /i "%%A"=="DEPLOY_COMMAND" set "DEPLOY_COMMAND=%%B"
        )
    )
)

echo Connecting to %DEPLOY_USER%@%DEPLOY_HOST%...
ssh %DEPLOY_USER%@%DEPLOY_HOST% -i "%DEPLOY_KEY%" "cd %DEPLOY_PATH% && git pull && %DEPLOY_COMMAND%"
echo Deployment command finished.
pause
