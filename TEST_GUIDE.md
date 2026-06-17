# ✅ COMPLETE TESTING GUIDE

## 1️⃣ TEST LANDING PAGE
- URL: http://localhost:3000
- Should see: Hero section, features, CTA buttons
- Click: "Get Started" or "Install Extension"

## 2️⃣ TEST SIGNUP
- URL: http://localhost:3000/sign-up
- Enter: Email & Password
- Click: Sign Up
- Check database for new user

## 3️⃣ TEST LOGIN
- URL: http://localhost:3000/sign-in
- Enter: Your email & password
- Click: Sign In
- Redirects to /dashboard

## 4️⃣ TEST USER DASHBOARD
- URL: http://localhost:3000/dashboard
- Should see: "Your Tracked Emails" section
- Should be empty initially
- Shows stats when emails are tracked

## 5️⃣ TEST EXTENSION INSTALLATION
Step 1: Pack extension
```bash
cd /vercel/share/v0-project/public/extension
zip -r emailtracker-extension.zip .
```

Step 2: Load in Chrome
- chrome://extensions
- Enable "Developer mode"
- "Load unpacked" → select /public/extension
- Extension should appear in toolbar

## 6️⃣ TEST EXTENSION IN GMAIL
1. Go to: https://mail.google.com
2. Click "Compose"
3. Look for floating "Track Email" button
4. Toggle it ON (should turn blue)
5. Fill email details
6. Click "Send"
7. Check /dashboard - email should appear

## 7️⃣ TEST EXTENSION IN OUTLOOK
1. Go to: https://outlook.live.com
2. Click "New Message"
3. Look for floating button
4. Toggle ON
5. Send email
6. Check /dashboard

## 8️⃣ TEST ADMIN DASHBOARD
- URL: http://localhost:3000/admin
- Manually change user role in database to 'admin'
- Should see all users & all emails
- Can view system-wide stats

## 9️⃣ TEST EMAIL TRACKING
1. Send tracked email
2. Open it in another email client
3. Check /dashboard
4. Should see open record with:
   - Open time
   - Device type
   - Browser
   - IP address

## 🔟 DATABASE VERIFICATION
- Check Neon dashboard
- Verify tables are populated:
  - users table (your account)
  - emails table (tracked emails)
  - email_opens table (open records)
  - session table (auth sessions)

## ✅ ALL TESTS PASSED?
If yes → You're ready to deploy to Vercel!
If no → Check console logs & debug
