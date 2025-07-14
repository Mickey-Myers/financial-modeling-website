# 🔐 Vercel Environment Variables Setup

## Required Environment Variables

Configure these in your Vercel dashboard under: **Project Settings → Environment Variables**

### Database Configuration
```
DATABASE_URL=postgresql://neondb_owner:npg_I81URPQxdbZt@ep-jolly-term-addq8le6-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

### Authentication
```
JWT_SECRET=your-jwt-secret-here
ADMIN_PASSWORD_HASH=$2b$10$5VMmZ2N2MA2BoRUWfa61j.RUJFfYlgmTaKrUH76K2gz7PZtjB86AK
```

### EmailJS Configuration
```
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_PUBLIC_KEY=your-public-key
VITE_EMAILJS_ADMIN_TEMPLATE_ID=your-admin-template
VITE_EMAILJS_CLIENT_TEMPLATE_ID=your-client-template
VITE_ADMIN_EMAIL=your-admin-email@domain.com
```

## Setup Instructions

1. Go to [vercel.com](https://vercel.com) and login
2. Navigate to your project → Settings → Environment Variables
3. For each variable above:
   - Name: Copy the variable name (e.g., `DATABASE_URL`)
   - Value: Copy your actual value (replace placeholder text)
   - Environment: Select "Production, Preview, and Development"
   - Click "Save"

## Security Notes

- ✅ **VITE_** prefixed variables are exposed to the frontend (safe for public keys)
- 🔒 **Non-VITE** variables are server-side only (keep secret)
- 🔑 Never commit actual values to git
- 📧 Test EmailJS configuration after deployment

## Copy Your Values From Local .env

Run this command locally to see your current values:
```bash
cat .env
```

Copy each value to the corresponding Vercel environment variable. 