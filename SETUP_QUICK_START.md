# 🚀 Backend Setup - Quick Start Guide

Your portfolio now has a complete backend system! Here's what's new:

## ✨ New Features

1. **📧 Contact Form** - Fully functional contact form that sends you email notifications
2. **📥 Resume Download** - Visitors can download your CV with automatic tracking
3. **🔔 Notifications** - Get notified every time someone contacts you or downloads your resume
4. **📊 Admin Dashboard** - View all submissions and download stats
5. **✅ Auto Reply** - Visitors get automatic confirmation emails

---

## 📦 Files Created

```
✅ server.js                - Node.js backend server
✅ package.json             - Project dependencies  
✅ .env.example             - Email configuration template
✅ BACKEND_SETUP.md         - Detailed setup guide
✅ admin-stats.html         - Admin dashboard
✅ .gitignore               - Security file
```

## 🎯 What to Do Now

### 1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Install the LTS version
   - Verify: Open terminal and type `node --version`

### 2. **Install Dependencies**
   ```bash
   cd c:\Users\boss\Desktop\portfolio
   npm install
   ```

### 3. **Setup Email Notifications**

   **Option A: Using Gmail (Recommended)**
   - Go to: https://myaccount.google.com/
   - Click "Security" on the left
   - Enable "2-Step Verification"
   - Create "App Password" (select Mail + Windows)
   - Copy the 16-character password

   **Option B: Using other email (Outlook, Yahoo, etc.)**
   - See BACKEND_SETUP.md for detailed instructions

### 4. **Create .env File**
   Create a new file named `.env` in your portfolio folder:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-char-password
   PORT=3000
   ADMIN_EMAIL=rsingh54435@gmail.com
   ```

### 5. **Add Your Resume**
   - Save your resume as PDF
   - Name it: `resume.pdf`
   - Place in portfolio folder

### 6. **Start Backend**
   ```bash
   npm start
   ```
   
   You should see:
   ```
   🚀 Portfolio backend running on http://localhost:3000
   ```

### 7. **Test Everything**
   - ✅ Download resume button should work
   - ✅ Contact form should work
   - ✅ Check your email for notifications
   - ✅ View admin dashboard: `admin-stats.html`

---

## 🌐 Frontend Integration

Your `index.html` and `script.js` are already updated with:
- ✅ Resume download button (with icon)
- ✅ Contact form integration with backend
- ✅ Error/success messages
- ✅ Form validation

---

## 📊 Admin Dashboard

**URL:** `admin-stats.html` (in portfolio folder)

Shows:
- 📈 Total messages received
- 📥 Total resume downloads  
- 📋 All contact messages
- 📅 Timestamps and visitor info

---

## 🔐 Security Notes

⚠️ **Important:**
- Never share your `.env` file
- Add `.env` to `.gitignore` (already done)
- Use Gmail App Passwords (not your Gmail password)
- Don't commit credentials to GitHub

---

## ❌ If Something Doesn't Work

1. **Check if backend is running**
   - Terminal should show: "🚀 Portfolio backend running on http://localhost:3000"

2. **Check console errors** (F12 in browser)
   - Look under Console tab for red errors

3. **Check .env file**
   - EMAIL_USER and EMAIL_PASS set correctly?
   - No leading/trailing spaces?

4. **Check resume file**
   - Is `resume.pdf` in portfolio folder?
   - Is it a valid PDF?

5. **See BACKEND_SETUP.md** for more troubleshooting

---

## 📝 What Happens in Backend

### Contact Form Submission:
1. ✅ Frontend validates inputs
2. ✅ Sends to backend
3. ✅ Backend validates again
4. ✅ **Email to YOU** - New message notification
5. ✅ **Email to VISITOR** - Confirmation
6. ✅ Data saved to `contacts.json`
7. ✅ Success message shown

### Resume Download:
1. ✅ User clicks button
2. ✅ Backend tracks download
3. ✅ Saves to `downloads.json`
4. ✅ **Email to YOU** - Download notification
5. ✅ Resume file sent

---

## 🚀 Next Steps

After testing locally:

### For Production/Online Deployment:

You need to deploy the backend somewhere:
- **Heroku** - Free tier available
- **Railway** - Easy deployment
- **AWS** - Scalable option
- **Replit** - Simple deployment

Then update:
1. Change API URL in `script.js`
2. Update `.env` for production
3. Use HTTPS (required for production)

See BACKEND_SETUP.md for deployment instructions.

---

## 📞 Support

If stuck, check:
- ✅ BACKEND_SETUP.md (detailed guide)
- ✅ Browser console errors (F12)
- ✅ Terminal output for backend errors
- ✅ Make sure Node.js is installed

---

**You're all set! 🎉 Your portfolio backend is ready to go!**

Don't forget to:
1. ✅ Run `npm install`
2. ✅ Create `.env` file
3. ✅ Add `resume.pdf`
4. ✅ Run `npm start`
5. ✅ Test the form and download button
