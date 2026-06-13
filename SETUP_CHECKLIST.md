# ✅ Backend Setup Checklist

## Before You Start
- [ ] Node.js installed (check: `node --version`)
- [ ] npm installed (check: `npm --version`)
- [ ] Terminal/Command Prompt ready
- [ ] Gmail account (for email notifications)

## Step 1: Install Dependencies
```bash
cd c:\Users\boss\Desktop\portfolio
npm install
```
- [ ] Command completed without errors
- [ ] `node_modules` folder created
- [ ] `package-lock.json` created

## Step 2: Setup Email (Gmail)
- [ ] Go to myaccount.google.com
- [ ] Enable 2-Step Verification
- [ ] Create App Password (Mail + Windows)
- [ ] Copy the 16-character password

## Step 3: Create .env File
Create `.env` in portfolio folder:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-char-password
PORT=3000
ADMIN_EMAIL=rsingh54435@gmail.com
API_BASE_URL=http://localhost:3000
```
- [ ] `.env` file created
- [ ] EMAIL_USER filled (your Gmail)
- [ ] EMAIL_PASS filled (16 chars)
- [ ] File saved in portfolio folder

## Step 4: Add Resume
- [ ] Resume created as PDF
- [ ] Named: `resume.pdf`
- [ ] Placed in portfolio folder
- [ ] File size < 10MB

## Step 5: Start Backend
```bash
npm start
```
- [ ] Terminal shows: "🚀 Portfolio backend running on http://localhost:3000"
- [ ] No error messages
- [ ] Terminal stays open/running

## Step 6: Test Locally
- [ ] Visit your portfolio in browser
- [ ] Download button appears in About section
- [ ] Click "Download My Resume" - file downloads
- [ ] Check email for download notification
- [ ] Fill contact form and submit
- [ ] Check email for contact notification + auto-reply in visitor's inbox

## Step 7: View Admin Dashboard
- [ ] Open `admin-stats.html` in browser
- [ ] Should show 1 download and 1 contact message
- [ ] Data refreshes correctly

## Done! ✓
- [ ] Backend is working!
- [ ] Emails are sending!
- [ ] Download tracking works!

---

## Keep Backend Running

To keep the backend running:
- Keep terminal open while using portfolio
- Stop with: Ctrl+C (in terminal)
- Restart with: `npm start`

---

## Troubleshooting Tips

| Issue | Solution |
|-------|----------|
| "Cannot find module" | Run `npm install` again |
| Gmail emails not sending | Check .env file credentials |
| Download file not found | Create resume.pdf in portfolio folder |
| Backend won't start | Check if port 3000 is already in use |
| Contact form does nothing | Make sure backend is running |

---

## Files You'll See Created:
- ✅ `node_modules/` - Dependencies (ignore this)
- ✅ `contacts.json` - Contact submissions stored here
- ✅ `downloads.json` - Download tracking here
- ✅ `.env` - Your credentials (don't share!)
- ✅ `.env.example` - Template (reference)

---

**Next Steps After Testing:**

To deploy online (so it works 24/7):
1. Deploy backend to: Heroku / Railway / AWS / Replit
2. Update API_BASE_URL in `.env`
3. Update frontend API URL in script.js
4. Use HTTPS for production

See `BACKEND_SETUP.md` for deployment instructions.

---

**Questions? Check:**
- `BACKEND_SETUP.md` - Detailed guide
- `SETUP_QUICK_START.md` - Quick reference
- `admin-stats.html` - View submissions
