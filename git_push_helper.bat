@echo off
setlocal enabledelayedexpansion

echo ==========================================
echo       Orbita Git Deployment Helper
echo ==========================================
echo.
echo This script will help you push your code to GitHub.
echo Ensure you have created a repository on GitHub first.
echo.

:: Check for Git
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/downloads
    pause
    exit /b 1
)

:: 1. Initialize Git
echo [1/5] Checking Git status...
if not exist .git (
    echo Initializing new Git repository...
    git init
) else (
    echo Git repository found.
)

:: 2. Add all files
echo [2/5] Staging files...
git add .

:: 3. Commit
echo [3/5] Committing changes...
git commit -m "Deploy to Vercel: %date% %time%" || echo Nothing to commit.

:: 4. Ask for Repo URL
echo.
echo ==========================================
echo ENTER YOUR GITHUB REPOSITORY URL
echo Example: https://github.com/username/orbita.git
echo ==========================================
set /p REPO_URL="Repository URL: "

if "%REPO_URL%"=="" (
    echo [ERROR] No URL provided. Exiting.
    pause
    exit /b 1
)

:: 5. Add Remote & Push
echo [4/5] Configuring remote 'origin'...
git remote remove origin >nul 2>nul
git remote add origin %REPO_URL%

echo [5/5] Pushing to GitHub (main branch)...
git branch -M main
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Push failed!
    echo Possible reasons:
    echo 1. The repository URL is incorrect.
    echo 2. You don't have permission to push to this repository.
    echo 3. The remote repository has conflicts.
    echo.
) else (
    echo.
    echo ==========================================
    echo SUCCESS! Your code is now on GitHub.
    echo ==========================================
    echo Now go to your Vercel Dashboard and check the new deployment.
)

pause
endlocal
