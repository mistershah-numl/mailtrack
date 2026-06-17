# Browser Extension Installation Guide

## For Your Circle: How They Install & Use the Extension

Share this guide with anyone who wants to track emails!

---

## Prerequisites

Before installing the extension, users must:

1. ✅ Have a Chrome browser (or Chromium-based: Edge, Brave, Vivaldi)
2. ✅ Have created an account on your app
3. ✅ Be logged in to their email (Gmail or Outlook)

---

## Installation: 5-Minute Setup

### Method 1: Developer Mode (Local Testing)

**For you and close friends testing locally:**

#### Step 1: Get the Extension Files
1. Download your project folder
2. Find: `public/extension/` folder
3. This is the extension folder

#### Step 2: Open Chrome Extensions
1. Open Chrome
2. Go to: `chrome://extensions/`
3. You should see: "Extensions" page

#### Step 3: Enable Developer Mode
1. Look at **top right** of Extensions page
2. Toggle: "Developer mode" (turn it ON)
3. You'll see new buttons appear: "Load unpacked", "Pack extension", etc.

#### Step 4: Load the Extension
1. Click: **"Load unpacked"**
2. Navigate to: `your-project-folder/public/extension`
3. Click: **"Select Folder"** (select the extension folder)
4. ✅ Extension is installed!

#### Step 5: Verify Installation
1. Look for extension icon in Chrome toolbar (top right)
2. Should see a small icon with "E" or envelope
3. Click it to open popup
4. You should see: EmailTracker popup with login

---

### Method 2: Distribution (After Vercel Deployment)

**For sharing with your entire circle:**

(This will be available on your website after deployment)

#### For Users:
1. Go to: `https://your-app.vercel.app/extension/download`
2. Click: **"Download EmailTracker Extension"**
3. You get: `emailtracker-extension.zip`
4. Extract the ZIP file
5. Follow Developer Mode steps above (Step 2-4)

---

## Using the Extension

### In Gmail

#### Composing an Email
1. Open Gmail: `gmail.com`
2. Click: **"Compose"** (top left)
3. Write your email normally
4. **Before sending**, look for: **"Track This Email"** button
   - It's a purple/blue button in the compose toolbar
   - Shows: "📍 Track This Email"

#### Enable Tracking
1. Click: **"Track This Email"** button
2. Button changes to: **"✓ Tracking Enabled"** (green)
3. Add recipient email address
4. Add subject and content
5. Click: **"Send"**
6. ✅ Email sent with tracking!

#### Check Your Dashboard
1. Go to: `https://your-app.vercel.app/dashboard`
2. You should see your sent email in the list
3. Wait for recipient to open email
4. Dashboard updates in real-time
5. Click email to see detailed analytics

### In Outlook

#### Composing an Email
1. Open Outlook: `outlook.com` or desktop app
2. Click: **"New Message"**
3. Write your email normally
4. **Before sending**, look for: **"Track This Email"** button

#### Enable Tracking
1. Click: **"Track This Email"** button
2. Button shows it's enabled
3. Add recipient, subject, content
4. Click: **"Send"**
5. ✅ Email sent with tracking!

#### Check Your Dashboard
1. Same as Gmail - go to dashboard
2. See tracked email
3. Wait for recipient to open
4. View analytics

---

## What Users Will See When Extension Works

### Extension Icon in Toolbar
```
Chrome Toolbar (top right):
[Google] [Gmail] [EmailTracker] [More Apps]
                      ↑
              You'll see our icon here
```

### Extension Popup (Click the icon)
```
┌─────────────────────────────────┐
│   📧 EmailTracker              │
├─────────────────────────────────┤
│                                 │
│  Status: Ready to Track         │
│  Emails Tracked: 42             │
│  Last Email: 2 hours ago        │
│                                 │
│  [📧 View Dashboard]            │
│  [⚙️ Settings]                  │
│  [🔗 Sign In]                   │
│                                 │
└─────────────────────────────────┘
```

### In Gmail Compose
```
Gmail Compose Area:
┌─────────────────────────────────┐
│ To: [_________________]         │
│ Subject: [________________]     │
├─────────────────────────────────┤
│                                 │
│ [Send] [Track This Email] [...]│
│                                 │
│ Write your email here...        │
│                                 │
└─────────────────────────────────┘
         ↑
    Purple button appears when
    extension is working
```

---

## Troubleshooting

### Extension Icon Not Showing
```
Problem: Don't see EmailTracker icon in toolbar
Solution:
1. Make sure you followed all installation steps
2. Go to chrome://extensions/
3. Find: EmailTracker
4. Make sure it's ENABLED (toggle should be ON)
5. If not enabled, click toggle to enable
6. Refresh Gmail and try again
```

### No "Track This Email" Button in Gmail
```
Problem: Button not appearing in compose
Solution:
1. Make sure extension is installed and enabled
2. Check icon appears in toolbar
3. Go to chrome://extensions/
4. Click: EmailTracker Details
5. Look for: "Allow access to all sites"
6. Toggle it ON
7. Refresh Gmail
8. Try composing again
```

### "Need to Sign In" in Extension Popup
```
Problem: Extension popup says you need to sign in
Solution:
1. Click: "Sign In" in popup
2. Enter email: your@email.com
3. Enter password: your password
4. Click: Sign In
5. You should see: "Status: Ready to Track"
6. Now try using in Gmail
```

### Extension Not Syncing with Dashboard
```
Problem: Email sent with tracking but doesn't appear in dashboard
Solution:
1. Wait a few seconds (sometimes has small delay)
2. Refresh dashboard page (F5)
3. Make sure you're signed in (check cookie)
4. Try sending another email
5. Check browser console (F12) for errors
```

### "Allow access to all sites" Missing
```
Problem: Can't find the permission toggle
Solution:
1. Go to chrome://extensions/
2. Click: EmailTracker
3. Click: "Details" button
4. Look for: "Allow this extension access to:"
5. Should have option for "All sites" or "Gmail.com"
6. Select: "All sites"
7. Confirm permission
```

### Extension Crashes or Not Loading
```
Problem: Extension shows error or doesn't load
Solution:
1. Go to chrome://extensions/
2. Find: EmailTracker
3. Click: Trash/Delete icon
4. Re-download the extension folder
5. Follow installation steps again
6. Re-install fresh extension
```

---

## Advanced: Chrome vs Other Browsers

### Works On
- ✅ Google Chrome
- ✅ Microsoft Edge
- ✅ Brave Browser
- ✅ Vivaldi
- ✅ Opera

(All Chromium-based browsers)

### Doesn't Work On
- ❌ Firefox (different extension format)
- ❌ Safari (different extension format)
- ❌ Mobile browsers (don't support extensions)

---

## Security & Privacy

### What the Extension Does
- ✅ Sends tracking pixel with email
- ✅ Stores email details in your account
- ✅ Syncs with your dashboard
- ✅ Never stores passwords locally
- ✅ Uses secure authentication tokens

### What It Doesn't Do
- ❌ Never reads your email content
- ❌ Never sends your password anywhere
- ❌ Never tracks data without your permission
- ❌ Never sends data to third parties
- ❌ Never sells your information

---

## Tips & Best Practices

### Do's
- ✅ Enable tracking for important emails
- ✅ Check analytics after emails are sent
- ✅ Monitor open rates to improve communication
- ✅ Keep extension updated (auto-updates)
- ✅ Use in Gmail and Outlook

### Don'ts
- ❌ Don't send tracking email to spam lists
- ❌ Don't track emails without consent from recipients
- ❌ Don't use to track personal relationships
- ❌ Don't disable extension features in settings
- ❌ Don't share tracking details without permission

---

## Uninstalling the Extension

If users want to remove the extension:

1. Go to: `chrome://extensions/`
2. Find: EmailTracker
3. Click: Trash/Delete icon (right side)
4. Confirm: "Remove extension"
5. ✅ Extension is removed

**Note**: Data is still in your dashboard, just the extension is gone. You can reinstall anytime.

---

## Support & Help

If users have issues:

1. Check **Troubleshooting** section above
2. Read your app's FAQ or support page
3. Check browser console for error messages (F12)
4. Try refreshing Gmail and extension
5. Try reinstalling extension if still broken

---

## Summary

Users should be able to:
- ✅ Install extension in 5 minutes
- ✅ See "Track This Email" button in Gmail/Outlook
- ✅ Click button and send tracked emails
- ✅ View analytics in dashboard
- ✅ Know when emails are opened

**That's it!** Everything else is automatic. 🎉
