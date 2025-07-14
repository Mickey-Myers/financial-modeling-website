# 📧 EMAILJS COMPLETE SETUP GUIDE

## 🚀 STEP 1: EMAILJS ACCOUNT SETUP

### A. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create account
3. Verify your email address
4. Login to your EmailJS dashboard

### B. Add Email Service
1. In EmailJS dashboard, click "Email Services" in left sidebar
2. Click "Add New Service"
3. Choose "Gmail" (recommended for easy setup)
4. Click "Connect Account" and authorize with your Gmail
5. **SAVE THE SERVICE ID** (e.g., `service_abc123`)

### C. Get Your Public Key
1. Go to "Integration" tab in EmailJS dashboard
2. Copy your "Public Key" (e.g., `Abc123DefGhi`)
3. **SAVE THIS KEY** for later use

## 🎯 STEP 2: CREATE EMAIL TEMPLATES

### Template 1: Admin Notification
1. Click "Email Templates" → "Create New Template"
2. **Template Name**: `financial_modeling_lead`
3. **Subject**: `🚨 New Financial Modeling Lead - {{company_name}}`
4. **Content**: Copy the HTML from email-templates.md (Admin Template)
5. **Save Template** and copy the Template ID (e.g., `template_abc123`)

### Template 2: Client Auto-Responder
1. Create another template
2. **Template Name**: `client_confirmation`
3. **Subject**: `Thank you for your financial modeling inquiry - We'll respond within 2 hours`
4. **Content**: Copy the HTML from email-templates.md (Auto-Responder Template)
5. **Save Template** and copy the Template ID (e.g., `template_def456`)

## 🔧 STEP 3: ENVIRONMENT VARIABLES

Create a `.env.local` file in your project root:

```bash
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_PUBLIC_KEY=Abc123DefGhi
REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID=template_abc123
REACT_APP_EMAILJS_CLIENT_TEMPLATE_ID=template_def456

# Admin Email (YOUR EMAIL ADDRESS)
REACT_APP_ADMIN_EMAIL=youremail@domain.com
```

## 🧪 STEP 4: TESTING

1. **Start your development server**:
```bash
npm run dev
```

2. **Test the form**:
   - Go to http://localhost:3000
   - Fill out the contact form completely
   - Submit the form
   - Check your email within 30 seconds

3. **Check for errors**:
   - Open browser console (F12)
   - Look for "✅ Both emails sent successfully" message
   - If you see errors, check your EmailJS configuration

## 🚨 TROUBLESHOOTING

### Common Issues:

1. **"Invalid public key" error**:
   - Double-check your public key in EmailJS dashboard
   - Ensure no extra spaces in .env.local file

2. **"Service not found" error**:
   - Verify your service ID is correct
   - Check that Gmail service is properly connected

3. **"Template not found" error**:
   - Verify template IDs are correct
   - Check that templates are published (not draft)

4. **Emails not received**:
   - Check spam folder
   - Verify admin email address is correct
   - Check EmailJS dashboard for error logs

## 📋 PRODUCTION DEPLOYMENT

### For Vercel/Netlify:
Add environment variables in hosting platform:
- REACT_APP_EMAILJS_SERVICE_ID
- REACT_APP_EMAILJS_PUBLIC_KEY
- REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID
- REACT_APP_EMAILJS_CLIENT_TEMPLATE_ID
- REACT_APP_ADMIN_EMAIL

### For Traditional Hosting:
Create `.env.production` file with same variables.

## ✅ SUCCESS CHECKLIST

- [ ] EmailJS account created and verified
- [ ] Gmail service connected and Service ID saved
- [ ] Public key copied from EmailJS dashboard
- [ ] Admin notification template created with correct Template ID
- [ ] Client auto-responder template created with correct Template ID
- [ ] Environment variables configured in .env.local
- [ ] Development server running
- [ ] Test form submission successful
- [ ] Admin email received within 30 seconds
- [ ] Client confirmation email received
- [ ] No errors in browser console
- [ ] Environment variables configured for production

## 🎯 NEXT STEPS

After successful testing:
1. Deploy to production with environment variables
2. Update admin email to your business email
3. Test production deployment
4. Monitor email delivery
5. Set up backup notification method if needed

## 📞 SUPPORT

If you encounter issues:
1. Check EmailJS dashboard for error logs
2. Verify all template variables are correctly mapped
3. Test with a simple template first
4. Check browser network tab for API errors
5. Ensure your hosting platform supports environment variables 