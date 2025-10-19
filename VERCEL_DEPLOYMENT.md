# Quick Vercel Deployment Guide

Follow these simple steps to deploy your portfolio to Vercel:

## Step 1: Create a Vercel Account
If you don't already have one, sign up at [vercel.com](https://vercel.com)

## Step 2: Deploy Your Portfolio

### Option 1: Using Vercel Web Interface (Recommended)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your project from GitHub, GitLab, or Bitbucket
   - If your code isn't on a Git provider yet, you'll need to push it first
3. Configure your project:
   - Framework Preset: Select "Create React App"
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Click "Deploy"

### Option 2: Using Vercel CLI
1. Navigate to your frontend directory:
   ```
   cd frontend
   ```
2. Run the Vercel deploy command:
   ```
   vercel
   ```
3. Follow the prompts to complete deployment

## Step 3: Configure Custom Domain (Optional)
1. In your Vercel dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add your custom domain and follow the verification steps

Your portfolio is now live and will remain online indefinitely on Vercel's free tier!