# EmailTracker - Deployment Guide

## Overview
EmailTracker is a complete email tracking system with a Next.js web application, browser extension, and Neon PostgreSQL database.

## Architecture

### Backend
- **Framework**: Next.js 16 (App Router)
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth (email + password)
- **Hosting**: Vercel (recommended)

### Browser Extension
- **Supported Browsers**: Chrome, Edge, Firefox
- **Targets**: Gmail & Outlook
- **Distribution**: Manual installation via unpacked extension

## Prerequisites

1. Vercel Account (vercel.com)
2. Neon PostgreSQL Account (free tier available)
3. GitHub Repository (optional but recommended)

## Setup Instructions

### 1. Deploy to Vercel

1. **Connect Repository**:
   - Push your project to GitHub (or connect directly)
   - Go to vercel.com and sign in
   - Click "Add New" > "Project"
   - Import your repository

2. **Set Environment Variables** in Vercel:
   - `DATABASE_URL` - From Neon (automatically set if Neon integration is used)
   - `BETTER_AUTH_SECRET` - Generate with: `openssl rand -base64 32`
   - `NEXT_PUBLIC_AUTH_URL` - Set to your Vercel domain after deployment

3. **Deploy**:
   - Click "Deploy"
   - Wait for the deployment to complete
   - Your app will be at: `https://<project-name>.vercel.app`

### 2. Configure Neon Database

1. **Create Tables** (Already done during setup):
   - `user` - Better Auth users
   - `session` - Better Auth sessions
   - `account` - OAuth accounts
   - `verification` - Email verification
   - `emails` - Tracked emails
   - `email_opens` - Email open events

2. **Connection String**:
   - Get from Neon Console
   - Set as `DATABASE_URL` in Vercel

### 3. Build Browser Extension

1. **Prepare Extension Files**:
   ```bash
   # Navigate to extension directory
   cd public/extension
   
   # Files included:
   # - manifest.json
   # - popup.html & popup.js
   # - background.js
   # - content-gmail.js
   # - content-outlook.js
   ```

2. **Package Extension**:
   - Create a ZIP file containing all extension files
   - Or use a proper extension builder tool

3. **Distribute to Users**:
   - Users download the ZIP
   - Extract files locally
   - Open `chrome://extensions/` (Chrome/Edge)
   - Enable "Developer Mode"
   - Click "Load unpacked"
   - Select the extension folder

## Features

### User Dashboard
- View all tracked emails
- See open statistics (total, unique, rates)
- Install browser extension
- Email analytics

### Admin Dashboard
- Monitor all users
- View all tracked emails
- System-wide statistics
- User management

### Browser Extension
- Track email opens in Gmail & Outlook
- Toggle tracking per email
- Quick access to dashboard
- Real-time notifications

### Email Tracking
- Pixel-based tracking (1x1 GIF)
- Device detection (mobile/desktop)
- Browser identification
- IP address logging
- Timestamp tracking

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://...

# Authentication
BETTER_AUTH_SECRET=<random-32-char-string>
NEXT_PUBLIC_AUTH_URL=https://your-domain.vercel.app

# Optional
VERCEL_URL=<auto-set-by-vercel>
VERCEL_PROJECT_PRODUCTION_URL=<auto-set-by-vercel>
```

## Costs

### Free Tier (Recommended for Testing)
- **Vercel**: 100 deployments/month, serverless functions included
- **Neon**: 3 months free, then limited free tier
- **Total**: ~$0 for initial testing

### Production Costs
- **Vercel**: Pay-as-you-go (usually $20-100/month for low traffic)
- **Neon**: $4/month or usage-based
- **Total**: ~$30-150/month depending on scale

## Hosting Options

### Recommended: Vercel + Neon
- ✅ Serverless functions
- ✅ Zero-config deployment
- ✅ Automatic scaling
- ✅ Built-in analytics
- ✅ Free tier available

### Alternative: Hostinger
If you prefer traditional hosting:
1. Buy hosting plan
2. Deploy Node.js app manually
3. Configure PostgreSQL connection
4. Set up SSL certificate
5. Configure domain

## Security Considerations

1. **Always use HTTPS** in production
2. **Enable CORS** only for your domain
3. **Encrypt sensitive data** in transit
4. **Rotate BETTER_AUTH_SECRET** periodically
5. **Rate limit** API endpoints
6. **Validate** all email addresses before tracking
7. **Privacy**: Inform users about tracking in your terms

## Maintenance

### Regular Tasks
- Monitor database usage
- Review error logs
- Update dependencies
- Backup database

### Updates
- Update Next.js when new versions available
- Update extension regularly
- Monitor security alerts

## Troubleshooting

### Extension Not Working
- Check manifest.json validity
- Verify permissions in manifest
- Check browser console for errors
- Ensure user is signed in

### Emails Not Tracking
- Verify tracking ID generation
- Check pixel URL is accessible
- Ensure recipient opens in image-enabled client
- Check email logs

### Authentication Issues
- Verify BETTER_AUTH_SECRET is set
- Check DATABASE_URL connection
- Ensure database tables exist
- Clear cookies and retry

## Support

- GitHub Issues: Report bugs
- Email: support@emailtracker.app
- Documentation: Check `/docs` folder

## Next Steps

1. Deploy to Vercel
2. Test email tracking
3. Build user base
4. Gather feedback
5. Add more features (webhooks, API, etc.)
