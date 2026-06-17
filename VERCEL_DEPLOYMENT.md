# Deploy EmailTracker to Vercel - Step by Step

## Option 1: Deploy to Vercel (Recommended for You)

Since you don't have a domain, Vercel gives you a **free Vercel subdomain** (yourapp.vercel.app).

### Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign up"
3. Choose "Continue with GitHub" or "Email"
4. Complete signup

### Step 2: Prepare GitHub Repository

1. Create a GitHub account if you don't have one
2. Create a new repository (e.g., "emailtracker")
3. Push your code:
   ```bash
   cd /vercel/share/v0-project
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/emailtracker.git
   git push -u origin main
   ```

### Step 3: Import Project to Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Click "Import Git Repository"
4. Paste your repository URL
5. Click "Import"

### Step 4: Configure Environment Variables

1. In Vercel project settings, go to "Settings" → "Environment Variables"
2. Add these variables:

| Variable | Value | Get From |
|----------|-------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Neon Console |
| `BETTER_AUTH_SECRET` | Random 32-char string | `openssl rand -base64 32` |

3. Click "Add" for each variable
4. Click "Deploy"

### Step 5: Wait for Deployment

- Vercel automatically builds and deploys
- Takes 2-5 minutes
- You'll get a URL like: `https://emailtracker.vercel.app`

### Step 6: Test Your Deployment

1. Click the URL from deployment
2. You should see the landing page
3. Test sign-up functionality
4. Verify database connection

## Option 2: Use Vercel Domain (Current Setup)

Your app is already set up for Vercel:

```env
# Your app will be at:
https://<project-name>.vercel.app

# This is automatic - no extra setup needed
```

## Option 3: Add Custom Domain Later

Once you buy a domain (from GoDaddy, Namecheap, etc.):

### Add Domain to Vercel

1. Go to Vercel project → "Settings" → "Domains"
2. Enter your domain
3. Click "Add"
4. Update DNS records (Vercel will show instructions)
5. Wait 24-48 hours for DNS propagation

### DNS Records to Add

Vercel will show these automatically, but typically:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.21
```

## What Happens After Deployment

### Automatically Set Up

✅ HTTPS/SSL certificate (free)
✅ Auto-scaling serverless functions
✅ Global CDN for fast loading
✅ Automatic deployments on git push
✅ Environment variables securely stored
✅ Monitoring and analytics

### Your App Structure

```
Frontend (Next.js) - Deployed to Vercel
    ↓
Edge Functions - Deployed to Vercel  
    ↓
Database - Connected to Neon
    ↓
Browser Extension - Users download from your site
```

## Troubleshooting

### Issue: "Database Connection Error"

**Solution**: 
- Check `DATABASE_URL` is set correctly in Vercel
- Test connection string in Neon console
- Restart deployment

### Issue: "Build Failed"

**Solution**:
- Check logs in Vercel dashboard
- Verify all dependencies are installed
- Check `package.json` for missing packages

### Issue: "Authentication Not Working"

**Solution**:
- Verify `BETTER_AUTH_SECRET` is set
- Check it's at least 32 characters
- Regenerate if needed: `openssl rand -base64 32`

### Issue: "Extension Not Working"

**Solution**:
- Check `NEXT_PUBLIC_AUTH_URL` points to your Vercel domain
- Update extension popup.js with correct domain
- Reload extension in browser

## Monitoring Your Deployment

### Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click your project
3. View:
   - **Deployments**: History of all deployments
   - **Analytics**: Traffic and performance
   - **Functions**: API usage
   - **Error Logs**: Any runtime errors

### Set Up Notifications

1. Project → Settings → Notifications
2. Enable:
   - Deployment started
   - Deployment succeeded
   - Deployment failed

## What Users See

### With Vercel Domain

```
Landing Page: https://emailtracker.vercel.app
Sign Up: https://emailtracker.vercel.app/sign-up
Dashboard: https://emailtracker.vercel.app/dashboard
Admin: https://emailtracker.vercel.app/admin
Extension Download: https://emailtracker.vercel.app/extension/download
```

### With Custom Domain (future)

```
Landing Page: https://emailtracker.com
Sign Up: https://emailtracker.com/sign-up
Dashboard: https://emailtracker.com/dashboard
Admin: https://emailtracker.com/admin
Extension Download: https://emailtracker.com/extension/download
```

## Performance Metrics

Vercel automatically tracks:
- **TTFB** (Time to First Byte): < 200ms
- **FCP** (First Contentful Paint): < 1s
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1

Monitor these in Vercel Analytics.

## Cost with Vercel

### Free Tier (Most Suitable for You)
- 100 serverless function invocations per day
- 100 GB bandwidth per month
- Perfect for starting

### When You Hit Limits
- Upgrade to Pro: $20/month
- Includes:
  - Unlimited function invocations
  - 1 TB bandwidth
  - Advanced analytics
  - Priority support

## Environment Variables Explained

### DATABASE_URL
- PostgreSQL connection string from Neon
- Looks like: `postgresql://username:password@host/database`
- Used by: Drizzle ORM and Better Auth
- Must be kept secret

### BETTER_AUTH_SECRET
- Random string for signing session tokens
- Generate: `openssl rand -base64 32`
- Length: Must be ≥ 32 characters
- Used by: Authentication system
- **NEVER share publicly**

### NEXT_PUBLIC_AUTH_URL (Optional but Recommended)
- Your app's public URL
- Example: `https://emailtracker.vercel.app`
- Used by: Auth client redirects
- The NEXT_PUBLIC_ prefix means it's accessible in browser

## Deploying Updates

### Push Code Changes

```bash
git add .
git commit -m "Update landing page"
git push origin main
```

Vercel automatically:
1. Detects the push
2. Builds the project
3. Runs tests (if configured)
4. Deploys to production

### Rollback to Previous Deployment

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous deployment
4. Click the "..." menu
5. Click "Promote to Production"

## Domain Comparison

| Aspect | Vercel Domain | Custom Domain |
|--------|---------------|---------------|
| Cost | Free | $5-15/year |
| Setup Time | 1 minute | 24-48 hours (DNS) |
| Professional Feel | Good | Better |
| Easy to Remember | No | Yes |
| Best For | Testing/Hobby | Production |

## Next Steps

1. **Create GitHub repo** (if not done)
2. **Deploy to Vercel** (click "Deploy" above)
3. **Configure environment variables** in Vercel
4. **Test the application** at your Vercel URL
5. **Install extension** and test tracking
6. **Add custom domain** when ready (optional)

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/help
- **Neon Docs**: https://neon.tech/docs

---

**Status**: Ready to Deploy! 🚀

You now have a complete, production-ready email tracking system that works seamlessly with Vercel's free tier.
