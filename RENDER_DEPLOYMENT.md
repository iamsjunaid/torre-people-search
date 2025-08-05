# Render Deployment Guide

## Step 1: Prepare Your Repository

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

## Step 2: Deploy to Render

1. **Go to [Render Dashboard](https://dashboard.render.com/)**
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service**:
   - **Name**: `torre-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
   - **Plan**: Free

## Step 3: Set Environment Variables

In your Render dashboard, go to your service → Environment → Add Environment Variable:

```
NODE_ENV=production
PORT=10000
```

## Step 4: Deploy

1. **Click "Create Web Service"**
2. **Wait for deployment** (usually 2-3 minutes)
3. **Copy your service URL** (e.g., `https://torre-backend.onrender.com`)

## Step 5: Update Frontend

1. **Go to your Vercel dashboard**
2. **Navigate to Settings → Environment Variables**
3. **Add/Update**:
   ```
   VITE_API_BASE_URL=https://your-render-url.onrender.com
   ```
4. **Redeploy your frontend**

## Step 6: Test

1. **Test your backend**: Visit `https://your-render-url.onrender.com/api/health`
2. **Test your frontend**: Try searching and clicking on profiles

## Troubleshooting

### If deployment fails:
- Check the build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify the start command is correct

### If CORS errors occur:
- The server is configured to allow all origins in production
- If issues persist, add your Vercel domain to CORS_ORIGIN

### If API calls fail:
- Check the Render service logs
- Verify the environment variables are set correctly
- Test the health endpoint first

## Monitoring

- **Health Check**: `GET /api/health`
- **Root Endpoint**: `GET /`
- **API Endpoint**: `GET /api/genome/:username`

## Cost

- **Free Plan**: 750 hours/month
- **Auto-sleep**: After 15 minutes of inactivity
- **Wake-up**: Takes ~30 seconds when accessed 