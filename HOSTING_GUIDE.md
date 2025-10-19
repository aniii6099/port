# Portfolio Hosting Guide

This guide will help you host your portfolio website online.

## Option 1: GitHub Pages (Free)

1. Create a GitHub repository for your portfolio
2. Push your code to the repository
3. Build your portfolio:
   ```
   cd frontend
   npm run build
   ```
4. Deploy the contents of the `frontend/build` folder to GitHub Pages

## Option 2: Netlify (Free)

1. Create an account on [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository or upload the build folder directly
3. Configure the build settings:
   - Build command: `cd frontend && npm install --legacy-peer-deps && npm run build`
   - Publish directory: `frontend/build`
4. Deploy your site

## Option 3: Vercel (Free)

1. Create an account on [Vercel](https://vercel.com/)
2. Connect your GitHub repository
3. Configure the project settings:
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Deploy your site

## Pre-Deployment Checklist

1. Make sure your resume (CV.pdf) is in the `frontend/public` folder
2. Test all links and features locally
3. Ensure responsive design works on different devices
4. Update any personal information or links as needed

## Custom Domain (Optional)

All the hosting platforms above support custom domains. Follow their documentation to connect your personal domain name to your portfolio website.