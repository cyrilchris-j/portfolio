# EmailJS Setup Guide for Contact Form

## 📧 Step-by-Step Setup Instructions

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

### 2. Add Email Service
1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider (Gmail is recommended)
4. Click **"Connect Account"** and authorize EmailJS to send emails
5. **Copy the Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template structure:

**Subject:**
```
New Contact Form Message from {{name}}
```

**Content:**
```
You have received a new message from your portfolio contact form.

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key
1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)
3. Copy this key

### 5. Update Your Contact.jsx File

Open `src/pages/Contact.jsx` and replace these lines (around line 40-42):

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

**Example:**
```javascript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'abcdefghijklmnop';
```

### 6. Test Your Form
1. Save the file
2. Go to your Contact page
3. Fill out the form and click "Send Message"
4. Check your email inbox (the one you connected to EmailJS)
5. You should receive the message!

## 🎯 Important Notes

- **Free Plan Limit:** EmailJS free plan allows 200 emails per month
- **Email Delivery:** Emails are sent from EmailJS, not directly from your domain
- **Spam Folder:** First emails might go to spam, mark them as "Not Spam"
- **Template Variables:** Make sure the template uses `{{name}}`, `{{email}}`, and `{{message}}`

## 🔧 Troubleshooting

**If emails aren't sending:**
1. Check browser console for errors (F12)
2. Verify all IDs are correct (no typos)
3. Make sure your EmailJS account is verified
4. Check EmailJS dashboard for error logs

**If emails go to spam:**
1. Add the EmailJS sender to your contacts
2. Mark the first email as "Not Spam"

## ✅ What's Already Implemented

✓ Form validation
✓ Loading state while sending
✓ Success/error messages
✓ Form reset after successful submission
✓ Controlled form inputs
✓ Beautiful animations

---

**Need Help?** Check EmailJS documentation: https://www.emailjs.com/docs/
