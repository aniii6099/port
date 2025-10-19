@echo off
echo ===== PORTFOLIO DEPLOYMENT TO VERCEL =====
echo.
cd frontend

echo Installing dependencies...
call npm install --legacy-peer-deps

echo.
echo Building project...
call npm run build

echo.
echo Deploying to Vercel...
call vercel --prod

echo.
echo Deployment process completed!
echo Check the URL above for your live portfolio.
echo Your portfolio is now hosted for free on Vercel!
pause