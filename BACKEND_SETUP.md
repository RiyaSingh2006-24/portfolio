# Portfolio Backend Setup Guide

This guide will help you set up the backend for contact form submissions and resume download tracking.

## 📋 Features

✅ **Contact Form** - Visitors can send you messages  
✅ **Email Notifications** - Get notified when someone sends a message  
✅ **Resume Download Tracking** - Know when someone downloads your CV  
✅ **Auto Reply** - Visitors get an automatic confirmation email  
✅ **Statistics** - View all submissions and downloads  

---

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
npm install
```

This installs:
- `express` - Web server
- `nodemailer` - Email sending
- `cors` - Allow frontend requests
- `body-parser` - Parse form data
- `dotenv` - Environment variables

### Step 2: Setup Gmail (For Email Notifications)

1. Go to your Gmail account: https://myaccount.google.com/
2. Click **Security** on the left
3. Enable **2-Step Verification** (if not already enabled)
4. Search for **App passwords**
5. Select **Mail** and **Windows Computer** (or your device)
6. Gmail will generate a 16-character password
7. Copy this password

### Step 3: Configure Environment Variables

1. Create a file named `.env` in your project folder:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-from-step2
PORT=3000
ADMIN_EMAIL=rsingh54435@gmail.com
API_BASE_URL=http://localhost:3000
```

Replace:
- `your-email@gmail.com` - Your Gmail address
- `your-app-password-from-step2` - The 16-char password from Step 2
- `rsingh54435@gmail.com` - Your email to receive notifications

### Step 4: Add Your Resume

1. Create a PDF of your resume named `resume.pdf`
2. Place it in the portfolio folder (same location as `index.html`)

### Step 5: Start the Backend

```bash
npm start
```

You should see:
```
🚀 Portfolio backend running on http://localhost:3000
📧 Email notifications: Set EMAIL_USER and EMAIL_PASS in .env file
📄 Place resume.pdf in the portfolio folder for downloads
```

### Step 6: Test It

1. Open your portfolio in browser
2. Try:
   - Clicking **Download My Resume** button
   - Submitting the contact form
   - Check your email for notifications

---

## 📁 File Structure

```
portfolio/
├── index.html              # Your website
├── styles.css             # Styling
├── script.js              # Frontend JavaScript
├── server.js              # Backend (NEW)
├── package.json           # Dependencies (NEW)
├── .env                   # Email config (CREATE THIS)
├── .env.example          # Template
├── resume.pdf            # Your CV (ADD THIS)
├── contacts.json         # Contact submissions (auto-created)
└── downloads.json        # Resume downloads (auto-created)
```

---

## ℹ️ Important Notes

### For Local Testing:
- Backend runs on `http://localhost:3000`
- Resume downloads work when backend is running
- Form submissions work when backend is running

### For Production/Deployment:

If you deploy online, you need to:

1. **Change API URL** in `script.js`:
   ```javascript
   this.apiUrl = 'https://your-deployed-backend.com/api/contact';
   ```

2. **Update .env** with production email credentials

3. **Deploy server.js** somewhere (Heroku, AWS, Railway, etc.)

4. **Update the download link** in `index.html` to your production server URL

---

## 🔒 Security Recommendations

1. ✅ Don't commit `.env` file to GitHub (add to `.gitignore`)
2. ✅ Use Gmail App Passwords (not your real password)
3. ✅ Add rate limiting for form submissions (if scaling)
4. ✅ Validate all inputs on backend
5. ✅ Use HTTPS in production

---

## 🛠️ API Endpoints

### 1. **Submit Contact Form**
```
POST /api/contact
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I want to hire you..."
}
```

### 2. **Download Resume**
```
GET /api/download-resume
```

### 3. **View Statistics** (admin)
```
GET /api/stats
```

---

## 📧 What Happens When Form is Submitted

1. ✅ Frontend validates the form
2. ✅ Data sent to backend (server.js)
3. ✅ Backend validates data
4. ✅ **Email to YOU** - New message notification
5. ✅ **Email to VISITOR** - Confirmation message
6. ✅ Data saved to `contacts.json` file
7. ✅ Frontend shows success message

---

## 📥 Resume Download Tracking

When someone downloads your resume:

1. ✅ Download counted in `downloads.json`
2. ✅ You get email notification
3. ✅ Download timestamp recorded
4. ✅ User device info stored (for stats)

---

## ❓ Troubleshooting

### "Cannot GET /api/contact"
- [ ] Is backend running? (`npm start`)
- [ ] Is backend on `http://localhost:3000`?

### Emails not sending
- [ ] Check `.env` file exists
- [ ] Is EMAIL_USER and EMAIL_PASS correct?
- [ ] Did you use App Password (not regular password)?
- [ ] Enable **"Less secure apps"** in Gmail settings (if needed)

### Contact form shows error
- [ ] Backend must be running
- [ ] Check browser console (F12) for error messages
- [ ] Check terminal output for backend errors

### Resume won't download
- [ ] Did you create `resume.pdf`?
- [ ] Is it in the portfolio folder?
- [ ] Is backend running?

---

## 📞 Need Help?

If something doesn't work:
1. Check the terminal output for error messages
2. Look at browser console (F12) for client-side errors
3. Make sure all files exist (`resume.pdf`, `.env`)
4. Ensure backend is running on port 3000

---

## 🎉 Done!

Your portfolio now has:
- ✅ Working contact form with email notifications
- ✅ Resume download button with tracking
- ✅ Automatic replies to visitors
- ✅ Download statistics

Good luck with your portfolio! 🚀
