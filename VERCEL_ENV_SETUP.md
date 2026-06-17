# VERCEL DEPLOYMENT CHECKLIST

## ⚠️ IMPORTANT - Set These Variables in Vercel Dashboard

After pushing to GitHub, go to your Vercel project settings and add these environment variables:

### Production Variables
```
BETTER_AUTH_SECRET=cGV0zn+OvlTvKGzYfQQ7YCnJrx4RrzxHnRgd+nW81UI=
BETTER_AUTH_URL=https://mailtrack-indol.vercel.app
NEXT_PUBLIC_AUTH_URL=https://mailtrack-indol.vercel.app
DATABASE_URL=postgresql://neondb_owner:npg_ElSX7DHr5NmC@ep-frosty-bread-aistp629-pooler.c-4.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require
ADMIN_SETUP_SECRET=shah
NODE_ENV=production
```

### Steps:
1. Go to https://vercel.com/dashboard
2. Select your "mailtrack-indol" project
3. Click "Settings" → "Environment Variables"
4. Add all variables above
5. Redeploy the project

## Fixed Issues:
✅ Moved viewport from metadata export to separate viewport export
✅ Added NEXT_PUBLIC_AUTH_URL to environment variables
✅ Updated auth configuration with explicit baseURL and basePath
✅ Added Vercel and localhost URLs to trustedOrigins
✅ Updated manifest.json with correct icon references
✅ Created SVG icons for PWA manifest
