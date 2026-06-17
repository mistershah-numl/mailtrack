# EmailTracker - Quick Start Guide

## 🎯 What You Have Built

A complete email tracking system with:
- ✅ User dashboards (see all tracked emails)
- ✅ Admin dashboards (monitor all users)
- ✅ Browser extension (Gmail & Outlook)
- ✅ Email tracking (opens, device, IP, time)
- ✅ Authentication (email/password)
- ✅ Database (PostgreSQL via Neon)
- ✅ Production-ready code

## 🚀 Deploy in 5 Minutes

### Step 1: Create GitHub Repo
```bash
cd /vercel/share/v0-project
git init
git add .
git commit -m "Initial commit"
git push -u origin main
# (Replace with your repo URL)
```

### Step 2: Go to Vercel
- Visit: https://vercel.com
- Click: "New Project"
- Select: Your GitHub repository
- Click: "Import"

### Step 3: Add Environment Variables
In Vercel project settings → Environment Variables, add:

```
DATABASE_URL = (from your Neon account)
BETTER_AUTH_SECRET = (run: openssl rand -base64 32)
```

### Step 4: Click Deploy
- Vercel automatically builds and deploys
- Wait 2-5 minutes
- Get your URL: https://yourproject.vercel.app

### Step 5: Test It
- Open the URL
- Sign up for account
- Create dummy email entry
- View admin dashboard (change role in database)

## 📍 Your App URLs

| Page | URL |
|------|-----|
| Landing | `/` |
| Sign In | `/sign-in` |
| Sign Up | `/sign-up` |
| User Dashboard | `/dashboard` |
| Admin Dashboard | `/admin` |
| Extension Download | `/extension/download` |
| Tracking Pixel | `/api/track/[id]` |

## 🔑 Important Environment Variables

```
DATABASE_URL=postgresql://...      # Your Neon connection
BETTER_AUTH_SECRET=xxxxx...xxx     # Auth secret (32+ chars)
NEXT_PUBLIC_AUTH_URL=https://...   # Your Vercel domain
```

## 📱 Browser Extension

1. Download files from `public/extension/`
2. Create ZIP file
3. Go to `chrome://extensions/`
4. Enable "Developer Mode"
5. Click "Load unpacked"
6. Select extension folder
7. Sign in with your account

## 👥 User Types

### Regular User
- View their tracked emails
- See open statistics
- Install and use extension
- URL: `/dashboard`

### Admin User
- View all users
- See all tracked emails
- Monitor system statistics
- URL: `/admin`

**Note**: Only admins can access `/admin`. You need to manually set `role = 'admin'` in the database for your account.

## 📊 Database Schema Quick View

```
Users → Sessions (one user, many sessions)
Users → Emails (one user, many emails)
Emails → Opens (one email, many opens)
```

### Tables
- `user` - User accounts
- `session` - Active sessions
- `account` - OAuth data
- `verification` - Email verification
- `emails` - Tracked emails
- `email_opens` - Open events

## 🛠️ How Email Tracking Works

1. User composes email in Gmail/Outlook
2. Extension adds "Track" button
3. User clicks Track (toggles on/off)
4. User sends email
5. A unique pixel (`/api/track/ID`) is added to email body
6. When recipient opens email, pixel loads
7. Open is recorded in database
8. Dashboard updates with stats

## 💾 Database Commands

### View Users
```sql
SELECT id, email, role, createdAt FROM "user";
```

### Make Someone Admin
```sql
UPDATE "user" SET role = 'admin' WHERE email = 'your@email.com';
```

### View All Tracked Emails
```sql
SELECT * FROM emails ORDER BY createdAt DESC;
```

### View Open Events
```sql
SELECT * FROM email_opens ORDER BY openedAt DESC;
```

### Delete Test Data
```sql
DELETE FROM email_opens;
DELETE FROM emails;
DELETE FROM "user" WHERE email = 'test@example.com';
```

## 🐛 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Auth not working | Check `BETTER_AUTH_SECRET` is set |
| Database connection error | Verify `DATABASE_URL` in Vercel |
| Extension not tracking | Reload extension after deployment |
| 404 errors | Check URL routing in `app/` directory |
| Slow loading | Check Vercel analytics for bottlenecks |

## 📈 Next Steps

1. **Deploy** (follow Quick Deploy above)
2. **Test everything** (sign up, create emails, check admin)
3. **Customize branding** (update logo, colors, text)
4. **Invite team members** (add new users)
5. **Monitor** (check Vercel dashboard daily)
6. **Add domain** (optional, but recommended for production)

## 💬 How the Extension Works

### What It Does
- Injects a "Track" button into Gmail/Outlook compose
- Lets users toggle tracking per email
- Sends tracking ID to backend
- Inserts pixel into email HTML

### What Users See
- Floating "Track" button in compose area
- On/Off toggle for tracking
- Quick access to dashboard
- Sign in/out option

### Technical Details
- Uses `content-scripts` to inject UI
- `background.js` handles communication
- `popup.js` shows extension popup
- Manifest V3 compliant
- Works with Gmail & Outlook only (extensible to others)

## 🔐 Security Notes

- ✅ All user data scoped by userID
- ✅ Passwords encrypted with bcrypt
- ✅ Session tokens signed
- ✅ HTTPS everywhere (Vercel)
- ✅ Admin endpoints protected
- ✅ No secrets in code
- ✅ Ready for GDPR compliance

## 📊 File Size Reference

| Component | Size |
|-----------|------|
| Database Setup | ~1,200 lines |
| Auth System | ~500 lines |
| Dashboards | ~800 lines |
| Extension | ~600 lines |
| Total | ~3,100 lines |

## 🎨 Customization Ideas

1. **Branding**: Update colors, logo, fonts
2. **Features**: Add click tracking, file tracking
3. **Notifications**: Email alerts on opens
4. **Integrations**: Slack, Discord webhooks
5. **Analytics**: Advanced charts and reports
6. **API**: Public REST API for developers
7. **Mobile**: React Native mobile app

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `PROJECT_SUMMARY.md` | Full project overview |
| `DEPLOYMENT.md` | Detailed deployment guide |
| `VERCEL_DEPLOYMENT.md` | Vercel-specific setup |
| `QUICK_START.md` | This file - quick reference |

## 🚀 Ready to Launch?

Everything is set up and ready to go! Just:

1. Push to GitHub
2. Deploy to Vercel
3. Add environment variables
4. Start using it!

Your users will have a professional email tracking system ready to use in minutes.

---

**Last Updated**: June 2026  
**Status**: ✅ Production Ready
