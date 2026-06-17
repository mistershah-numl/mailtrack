# Vercel Hosting - URL Changes & API Configuration Guide

## QUICK ANSWER: Nothing to Change!

**Good news**: Your app automatically works on Vercel. **No URL changes needed** in your code!

Here's why and how it works:

---

## How It Works (Technical Explanation)

### Localhost (Development)
```
Frontend: http://localhost:3000
API Routes: http://localhost:3000/api/...
Database: Connected via DATABASE_URL env var
```

### Vercel (Production)
```
Frontend: https://your-project-name.vercel.app
API Routes: https://your-project-name.vercel.app/api/...
Database: Connected via DATABASE_URL env var (same!)
```

**The API routes are on the SAME DOMAIN, so requests work automatically!**

### Why URLs Don't Need Changes

Your Next.js app uses **relative URLs** for API calls:

```typescript
// This works everywhere (localhost AND Vercel)
const response = await fetch('/api/emails/track')

// NOT this (hardcoded localhost)
const response = await fetch('http://localhost:3000/api/emails/track')
```

Since your code uses relative URLs (which it does), it works on:
- `localhost:3000`
- `your-project-name.vercel.app`
- Your custom domain (later)
- Any URL!

---

## Step-by-Step: Deploy to Vercel

### Step 1: Push to GitHub (5 minutes)

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "EmailTracker - Email tracking system with extension"

# Create GitHub repo and push
# (GitHub website: Create new repo, then:)
git remote add origin https://github.com/YOUR_USERNAME/emailtracker.git
git branch -M main
git push -u origin main
```

### Step 2: Create Vercel Account (2 minutes)

1. Go to: https://vercel.com
2. Click "Sign Up"
3. Choose: "Continue with GitHub"
4. Authorize GitHub access
5. Done!

### Step 3: Create Vercel Project (3 minutes)

1. In Vercel dashboard, click "Add New..." → "Project"
2. Select your GitHub repo: `emailtracker`
3. Click "Import"
4. You'll see deployment settings

### Step 4: Add Environment Variables (2 minutes)

**CRITICAL**: You must add the same env vars from your local setup!

In Vercel, go to: **Settings** → **Environment Variables**

Add these 3 variables:

#### Variable 1: DATABASE_URL
```
Key: DATABASE_URL
Value: (Copy from your local .env or from Vercel's Neon integration)

It looks like:
postgres://user:password@host:5432/database?sslmode=require
```

#### Variable 2: BETTER_AUTH_SECRET
```
Key: BETTER_AUTH_SECRET
Value: (Copy from your local setup - same value as local!)

Example:
aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV
```

#### Variable 3: ADMIN_SETUP_SECRET
```
Key: ADMIN_SETUP_SECRET
Value: (Copy from your local setup - same value as local!)

Example:
my-admin-secret-key-for-setup
```

**How to get DATABASE_URL:**
- If you already have Neon integration: Vercel auto-adds it
- Check: Settings → Environment Variables → Look for DATABASE_URL
- If not there, copy from Neon console

**How to get BETTER_AUTH_SECRET and ADMIN_SETUP_SECRET:**
- Open your local .env file or v0 Settings > Vars
- Copy the exact values
- Paste into Vercel

### Step 5: Deploy (1 minute)

1. You should still be on the Import page
2. Click "Deploy" button (bottom)
3. Wait 2-5 minutes
4. You'll see: "Congratulations! Your project is live!"
5. Click "Visit" or go to: `https://your-project-name.vercel.app`

---

## After Deployment: What Happens Automatically

### URLs Update Automatically

Once deployed, your app runs at:
```
https://your-project-name.vercel.app
```

**Everything works automatically:**
- ✅ Frontend loads: `https://your-project-name.vercel.app`
- ✅ API calls work: `/api/auth/sign-up` automatically routes to Vercel
- ✅ Database connects: Same DATABASE_URL works
- ✅ Auth tokens work: BETTER_AUTH_SECRET is set
- ✅ Admin endpoint works: ADMIN_SETUP_SECRET is set

### No Code Changes Needed

You don't need to:
- ❌ Change any URLs in code
- ❌ Update API endpoints
- ❌ Change database connections
- ❌ Update environment variables in code
- ❌ Restart anything

**It just works!**

---

## Vercel Project Name: What Gets It?

When you create a project on Vercel, it gets a random name:
```
Example: emailtracker-7f2k9m.vercel.app
```

### Customize the Name (Optional)

Go to: **Settings** → **Domains**

Click "Edit" on the default domain and change it to something memorable:
```
Before: emailtracker-7f2k9m.vercel.app
After:  emailtracker-mine.vercel.app (or whatever you want)
```

---

## How API Routes Work on Vercel

### Request Flow

```
Browser: https://emailtracker-mine.vercel.app
    ↓
Click "Sign Up"
    ↓
Code: fetch('/api/auth/sign-up', { method: 'POST', ... })
    ↓
Vercel:recieves request
    ↓
Routes to: /app/api/auth/[...all]/route.ts
    ↓
Better Auth handler processes it
    ↓
Database query via DATABASE_URL
    ↓
Response sent back to browser
    ↓
Browser updates (user logged in!)
```

**Key Point**: Vercel automatically:
1. Routes `/api/*` requests to your API files
2. Has DATABASE_URL env var set
3. Has BETTER_AUTH_SECRET set
4. Everything works!

---

## Browser Extension on Vercel

### Current State (Development)
Extension calls:
```javascript
// content-gmail.js
const response = await fetch('http://localhost:3000/api/emails/track', {
  method: 'POST',
  ...
})
```

### After Vercel Deployment
The extension will automatically work because:

1. **Extension popup opens**: Shows login to extension popup
2. **User logs in**: Makes request to `/api/auth/sign-in`
3. **Automatically routes**: To your Vercel domain
4. **User gets token**: From authentication
5. **In Gmail**: User clicks "Track This Email"
6. **Request goes to**: `/api/emails/track`
7. **Automatically routes**: To your Vercel domain
8. **Email tracked!**: Saved in database

**Why it works**: The extension uses **relative URLs** in the code, not hardcoded localhost.

---

## Custom Domain Setup (Optional, After Vercel)

When you're ready to use a custom domain (not required):

### Buy a Domain
```
Options:
- Namecheap: $3-10/year
- GoDaddy: $5-15/year
- Google Domains: $12/year
- Any registrar
```

### Add to Vercel

1. Go to: **Settings** → **Domains**
2. Click "Add Domain"
3. Enter: `yourdomain.com`
4. Click "Add"
5. Follow Vercel's instructions (usually 2-3 steps)
6. Point nameservers to Vercel
7. Wait 15-30 minutes for DNS to update
8. Your app is now at: `https://yourdomain.com`

**Note**: Everything still works the same! No code changes needed.

---

## What If Something Breaks? Troubleshooting

### App doesn't load after deployment
```
Solution:
1. Check build logs: In Vercel dashboard, look at "Deployments"
2. Look for errors in red
3. Common issues:
   - Missing environment variable: Add it in Settings > Environment Variables
   - Database connection: Check DATABASE_URL is set correctly
   - Build failed: Check console output
```

### Sign-up/login not working
```
Solution:
1. Go to: https://yourdomain.vercel.app/sign-up
2. Open browser console: Press F12
3. Look for error messages
4. Common issues:
   - BETTER_AUTH_SECRET not set: Add in Settings > Environment Variables
   - Database error: Check DATABASE_URL
   - API error: Check build logs for API route errors
```

### Extension not working after deployment
```
Solution:
1. Extension still points to localhost (expected)
2. Need to update extension configuration (see below)
3. For now, use from browser at yourdomain.vercel.app
4. Later, distribute updated extension with new URL
```

### Database not connecting
```
Solution:
1. Check DATABASE_URL in Settings > Environment Variables
2. Verify it's the exact same as local
3. Go to Neon console: https://console.neon.tech
4. Verify your database exists
5. Check connection string is correct
6. Try connecting from Vercel terminal
```

---

## Update Extension for Production (When Ready)

After deployment, if you want the extension to work on the production domain:

### For Local Testing (Skip This)
- Extension works with localhost for testing
- No changes needed

### For Production Distribution (Later)
- Update extension to use production domain
- Create installer for users
- Let users install from your website

This is covered in a separate guide later.

---

## Environment Variables: Local vs Vercel

### They're the Same!

Just copy from local to Vercel:

```
LOCAL SETUP (.env or v0 Settings)
DATABASE_URL=postgres://...
BETTER_AUTH_SECRET=aB1cD2eF3gH4iJ5...
ADMIN_SETUP_SECRET=my-admin-secret...

VERCEL SETUP (Settings > Environment Variables)
DATABASE_URL=postgres://...
BETTER_AUTH_SECRET=aB1cD2eF3gH4iJ5...
ADMIN_SETUP_SECRET=my-admin-secret...
```

They're identical! That's why it works.

---

## API Routes on Vercel: How They Map

Your code structure:
```
app/
├── api/
│   ├── auth/[...all]/route.ts     → /api/auth/*
│   ├── track/[trackingId]/route.ts → /api/track/[trackingId]
│   └── admin/setup/route.ts        → /api/admin/setup
└── ...
```

On Vercel, they're accessible at:
```
https://your-project-name.vercel.app/api/auth/*
https://your-project-name.vercel.app/api/track/[trackingId]
https://your-project-name.vercel.app/api/admin/setup
```

These work exactly like localhost:
```
http://localhost:3000/api/auth/*
http://localhost:3000/api/track/[trackingId]
http://localhost:3000/api/admin/setup
```

**Same routes, different domain!**

---

## Step-by-Step Verification: After Deployment

### 1. Check App Loads (1 minute)
```
Go to: https://your-project-name.vercel.app
You should see the landing page with:
- "Track Every Email" headline
- Feature cards
- "Get Started" buttons
Status: ✅ If page loads
```

### 2. Test Sign-Up (2 minutes)
```
URL: https://your-project-name.vercel.app/sign-up
Fill in:
- Name: Test User
- Email: test@example.com
- Password: Test123!

Click: Create Account
Status: ✅ If you're logged in and at dashboard
```

### 3. Test Admin Setup (2 minutes)
```
Get your ADMIN_SETUP_SECRET from Vercel Settings > Environment Variables

Go to:
https://your-project-name.vercel.app/api/admin/setup?secret=YOUR_SECRET

Replace YOUR_SECRET with actual value from Vercel

Expected result:
{"success": true, "message": "User promoted to admin"}

Status: ✅ If you see success message
```

### 4. Test Admin Dashboard (1 minute)
```
URL: https://your-project-name.vercel.app/admin
You should see:
- All users list
- All emails list
- System statistics

Status: ✅ If dashboard loads with data
```

### 5. Test Database Connection (1 minute)
Dashboard should show real data, not empty lists
If empty, database might not be connected

Verify:
1. Go to Vercel Settings > Environment Variables
2. Look for DATABASE_URL
3. Copy it
4. Go to Neon console: https://console.neon.tech
5. Paste connection string to test it
```

---

## Common Issues & Fixes

### "Environment Variable is Undefined"
```
Cause: Env var not added to Vercel
Fix:
1. Go to: Vercel > Settings > Environment Variables
2. Add missing variable (DATABASE_URL, BETTER_AUTH_SECRET, etc.)
3. Re-deploy
```

### "Cannot POST /api/auth/sign-up"
```
Cause: API route not working
Fix:
1. Check build logs in Vercel dashboard
2. Look for errors
3. Common: Missing better-auth dependency
4. Solution: Check package.json has "better-auth"
```

### "Database connection failed"
```
Cause: DATABASE_URL wrong or database down
Fix:
1. Check DATABASE_URL in Vercel env vars
2. Compare with local version
3. Make sure values match exactly
4. Check Neon dashboard for database status
5. Restart database if needed
```

### "Sign-up works but can't log in"
```
Cause: Session token issue
Fix:
1. Check BETTER_AUTH_SECRET is set in Vercel
2. Must be exact same as local
3. Go to Vercel: Settings > Environment Variables
4. Verify value matches local
5. Re-deploy after fixing
```

---

## What Happens Behind the Scenes on Vercel

### Build Time (When you click Deploy)
```
1. Vercel pulls your code from GitHub
2. Runs: pnpm install (installs dependencies)
3. Runs: pnpm build (builds Next.js)
4. Runs: pnpm start (starts server)
5. If errors: Shows them in build logs
6. If success: App is ready
```

### Runtime (After deployment)
```
1. Your app runs on Vercel's servers
2. Gets DATABASE_URL from environment variables
3. Gets BETTER_AUTH_SECRET from environment variables
4. When someone visits: your-app.vercel.app
5. Vercel routes requests to your Next.js app
6. API routes work same as localhost
7. Database queries work through DATABASE_URL
```

### API Route Handling
```
Request comes in: https://your-app.vercel.app/api/auth/sign-up
Vercel checks: Do we have /app/api/auth/[...all]/route.ts?
Vercel routes: To that file
Next.js runs: The handler function
Returns: JSON response
Browser gets: The response
```

---

## Summary: Pre & Post Deployment

### Before Deployment (Localhost)
```
Frontend: http://localhost:3000
API: http://localhost:3000/api/*
Database: Connected via DATABASE_URL
Auth: Working with BETTER_AUTH_SECRET
Admin: Access via http://localhost:3000/api/admin/setup?secret=SECRET
Extension: Works with localhost
```

### After Deployment (Vercel)
```
Frontend: https://your-app.vercel.app
API: https://your-app.vercel.app/api/*
Database: SAME DATABASE_URL (auto-works)
Auth: SAME BETTER_AUTH_SECRET (auto-works)
Admin: Access via https://your-app.vercel.app/api/admin/setup?secret=SECRET
Extension: Still works (uses relative URLs)
```

**What changed**: Just the domain!
**What didn't change**: API routes, environment variables, database, code!

---

## Next Steps

1. **Deploy now** (using VERCEL_DEPLOYMENT.md)
2. **Test everything** (follow verification checklist above)
3. **Share link** with your circle
4. **They sign up** and install extension
5. **They start tracking!**

---

## Questions?

**"Do I need to change code?"** No!
**"Do I need to change API endpoints?"** No!
**"Do I need to change database?"** No!
**"Do I need to change environment variables in code?"** No!
**"What do I need to do?"** Just deploy and test!

That's it! 🚀
