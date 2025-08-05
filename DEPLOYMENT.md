# Production Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git repository access
- Domain name (optional)
- SSL certificate (recommended)

## Environment Setup

1. **Create environment file**:
   ```bash
   cp env.example .env
   ```

2. **Configure environment variables**:
   ```env
   # Frontend
   VITE_API_BASE_URL=https://your-domain.com
   
   # Backend
   PORT=3001
   NODE_ENV=production
   CORS_ORIGIN=https://your-domain.com
   ```

## Build Process

1. **Install dependencies**:
   ```bash
   npm install
   cd server && npm install
   cd ..
   ```

2. **Build the application**:
   ```bash
   npm run build
   ```

3. **Verify build**:
   ```bash
   npm run preview
   ```

## Deployment Options

### Option 1: Single Server (Recommended)

The server is configured to serve both the API and static files:

```bash
# Start production server
npm run start:prod
```

### Option 2: Separate Frontend/Backend

1. **Deploy backend** to your server
2. **Deploy frontend** to a CDN (Vercel, Netlify, etc.)
3. **Configure CORS** in backend to allow frontend domain

## Production Checklist

- [ ] Environment variables configured
- [ ] SSL certificate installed
- [ ] Domain configured
- [ ] CORS settings updated
- [ ] Error logging configured
- [ ] Health check endpoint working
- [ ] Static files being served
- [ ] API endpoints responding

## Monitoring

- Health check: `GET /api/health`
- Logs: Check server console output
- Errors: Monitor 500 responses

## Security Considerations

- Use HTTPS in production
- Configure proper CORS origins
- Add rate limiting if needed
- Consider API key authentication
- Monitor for abuse

## Performance Optimization

- Enable gzip compression
- Use CDN for static assets
- Implement caching headers
- Monitor response times 