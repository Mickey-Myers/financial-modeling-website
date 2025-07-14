# ⚡ EMAILJS QUICK START GUIDE

## 🚀 COMPLETE SETUP IN 15 MINUTES

### Step 1: EmailJS Account (5 minutes)
1. Go to [emailjs.com](https://www.emailjs.com/) → Sign up
2. Dashboard → "Email Services" → "Add New Service" → "Gmail"
3. Connect your Gmail account
4. Copy your **Service ID** (e.g., `service_abc123`)
5. Go to "Integration" tab → Copy your **Public Key**

### Step 2: Create Templates (5 minutes)
1. **Admin Template**: Dashboard → "Email Templates" → "Create New Template"
   - Name: `financial_modeling_lead`
   - Subject: `🚨 New Financial Modeling Lead - {{company_name}}`
   - Copy HTML from `email-templates.md` (Admin Template section)
   - Save → Copy **Template ID**

2. **Client Template**: Create another template
   - Name: `client_confirmation`
   - Subject: `Thank you for your financial modeling inquiry - We'll respond within 24 hours`
   - Copy HTML from `email-templates.md` (Auto-Responder section)
   - Save → Copy **Template ID**

### Step 3: Environment Variables (2 minutes)
Create `.env.local` file in your project root:
```bash
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_PUBLIC_KEY=Abc123DefGhi
REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID=template_abc123
REACT_APP_EMAILJS_CLIENT_TEMPLATE_ID=template_def456
REACT_APP_ADMIN_EMAIL=youremail@gmail.com
```

### Step 4: Test (3 minutes)
1. Run `npm run dev`
2. Go to http://localhost:3000
3. Fill out contact form
4. Submit → Check for "✅ Both emails sent successfully" in console
5. Check your email inbox

## 🎯 WHAT YOU'LL GET

### Admin Email (to you):
- 🚨 **Subject**: "New Financial Modeling Lead - Company Name"
- 📋 **Contains**: All form data, contact info, project details
- ⏰ **Timing**: Within 30 seconds of form submission
- 📱 **Mobile-friendly**: Professional formatting

### Client Email (to form submitter):
- 📧 **Subject**: "Thank you for your financial modeling inquiry"
- 🤝 **Contains**: Confirmation, next steps, your contact info
- ⏰ **Timing**: Within 30 seconds of form submission
- 💼 **Professional**: Matches your brand tone

## 🔧 QUICK TROUBLESHOOTING

| Issue | Solution |
|-------|----------|
| "Invalid public key" | Check EmailJS dashboard → Integration tab |
| "Service not found" | Verify service ID, ensure Gmail is connected |
| "Template not found" | Check template IDs, ensure templates are published |
| No emails received | Check spam folder, verify admin email address |

## 📋 PRODUCTION DEPLOYMENT

### Vercel/Netlify:
Add these environment variables in your hosting dashboard:
- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`
- `REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID`
- `REACT_APP_EMAILJS_CLIENT_TEMPLATE_ID`
- `REACT_APP_ADMIN_EMAIL`

### Traditional Hosting:
Create `.env.production` file with same variables.

## ✅ SUCCESS CHECKLIST

- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Public key copied
- [ ] Admin template created
- [ ] Client template created
- [ ] Environment variables configured
- [ ] Test form works
- [ ] Admin email received
- [ ] Client email received
- [ ] Production variables set

## 🎉 YOU'RE DONE!

Your contact form now sends professional email notifications automatically. Every form submission triggers:
1. **Admin notification** (to you) with all lead details
2. **Client confirmation** (to them) with next steps
3. **Database storage** (for admin dashboard)

**Response time**: Within 30 seconds
**Success rate**: 99%+ (with proper configuration)
**Professional appearance**: Investment-grade emails

## 📞 NEED HELP?

1. Check browser console for error messages
2. Review EmailJS dashboard for error logs
3. Verify all template variables are correctly mapped
4. Test with simple template first
5. Check network tab for API errors

**Most common issue**: Forgetting to publish templates (they default to draft mode) 