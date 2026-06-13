const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

// Configure email transporter (using Gmail or similar)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// File to store contact messages
const CONTACTS_FILE = path.join(__dirname, 'contacts.json');
const DOWNLOADS_FILE = path.join(__dirname, 'downloads.json');

// Initialize JSON files if they don't exist
function initializeFiles() {
    if (!fs.existsSync(CONTACTS_FILE)) {
        fs.writeFileSync(CONTACTS_FILE, JSON.stringify([], null, 2));
    }
    if (!fs.existsSync(DOWNLOADS_FILE)) {
        fs.writeFileSync(DOWNLOADS_FILE, JSON.stringify([], null, 2));
    }
}

initializeFiles();

// Route: Handle contact form submission
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate input
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create contact object
        const contact = {
            id: Date.now(),
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString(),
            ip: req.ip
        };

        // Save to contacts.json
        const contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf8'));
        contacts.push(contact);
        fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));

        // Send email notification to Riya
        const mailOptions = {
            from: process.env.EMAIL_USER || 'noreply@portfolio.com',
            to: 'rsingh54435@gmail.com',
            subject: `New Portfolio Message: ${subject}`,
            html: `
                <h2>You have a new message from your portfolio!</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <p><strong>Received at:</strong> ${new Date(contact.timestamp).toLocaleString()}</p>
                <hr>
                <p>Reply directly to: ${email}</p>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Email error:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        // Also save to your email
        const userMailOptions = {
            from: process.env.EMAIL_USER || 'noreply@portfolio.com',
            to: email,
            subject: 'We received your message - Riya Singh Portfolio',
            html: `
                <h2>Thank you for reaching out!</h2>
                <p>Hi ${name},</p>
                <p>I've received your message and will get back to you as soon as possible.</p>
                <p><strong>Your message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <p>Best regards,<br>Riya Singh</p>
            `
        };

        transporter.sendMail(userMailOptions, (error, info) => {
            if (error) {
                console.log('User email error:', error);
            }
        });

        res.json({ 
            success: true, 
            message: 'Your message has been sent successfully!',
            contactId: contact.id 
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// Route: Download resume and track download
app.get('/api/download-resume', (req, res) => {
    try {
        const resumePath = path.join(__dirname, 'resume.pdf');

        // Check if resume exists
        if (!fs.existsSync(resumePath)) {
            return res.status(404).json({ error: 'Resume not found. Please upload resume.pdf' });
        }

        // Record download
        const download = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            userAgent: req.get('user-agent'),
            ip: req.ip
        };

        const downloads = JSON.parse(fs.readFileSync(DOWNLOADS_FILE, 'utf8'));
        downloads.push(download);
        fs.writeFileSync(DOWNLOADS_FILE, JSON.stringify(downloads, null, 2));

        // Send notification email
        const notificationMail = {
            from: process.env.EMAIL_USER || 'noreply@portfolio.com',
            to: 'rsingh54435@gmail.com',
            subject: 'Your Resume was Downloaded! 📥',
            html: `
                <h2>Someone downloaded your resume!</h2>
                <p><strong>Downloaded at:</strong> ${new Date(download.timestamp).toLocaleString()}</p>
                <p><strong>Total Downloads:</strong> ${downloads.length}</p>
                <hr>
                <p>This is an automatic notification from your portfolio.</p>
            `
        };

        transporter.sendMail(notificationMail, (error) => {
            if (error) console.log('Notification email error:', error);
        });

        // Send the resume file
        res.download(resumePath, 'Riya_Singh_Resume.pdf');

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to download resume' });
    }
});

// Route: Get download statistics (for admin/dashboard)
app.get('/api/stats', (req, res) => {
    try {
        const downloads = JSON.parse(fs.readFileSync(DOWNLOADS_FILE, 'utf8'));
        const contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf8'));

        res.json({
            totalDownloads: downloads.length,
            totalMessages: contacts.length,
            downloads: downloads,
            messages: contacts
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stats' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'Backend is running!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Portfolio backend running on http://localhost:${PORT}`);
    console.log('📧 Email notifications: Set EMAIL_USER and EMAIL_PASS in .env file');
    console.log('📄 Place resume.pdf in the portfolio folder for downloads');
});
