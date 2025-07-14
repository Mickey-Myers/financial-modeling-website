# 🌐 Custom Domain Setup Guide

## Connecting Your Namecheap Domain to Vercel

### Step 1: Add Domain in Vercel Dashboard

1. Go to your Vercel project dashboard
2. Navigate to **Settings → Domains**
3. Click **"Add"** 
4. Enter your domain: `yourdomain.com`
5. Click **"Add"**

### Step 2: Configure DNS in Namecheap

1. Log into your [Namecheap account](https://namecheap.com)
2. Go to **Domain List → Manage** (for your domain)
3. Navigate to **Advanced DNS** tab
4. Delete any existing A, AAAA, or CNAME records for @ and www
5. Add these new records:

#### Required DNS Records:

**For Root Domain (@):**
```
Type: A
Host: @
Value: 76.76.19.19
TTL: Automatic
```

**For WWW Subdomain:**
```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

### Step 3: SSL Certificate (Automatic)

- ✅ Vercel automatically provisions SSL certificates
- 🕐 This process takes 5-10 minutes after DNS propagation
- 🔒 Your site will be available at both `https://yourdomain.com` and `https://www.yourdomain.com`

### Step 4: Verification & Testing

1. **DNS Propagation Check:**
   - Use [whatsmydns.net](https://whatsmydns.net) to check propagation
   - Enter your domain and check A record
   - Should show Vercel's IP: `76.76.19.19`

2. **Domain Verification in Vercel:**
   - Return to Vercel dashboard → Domains
   - You should see a green checkmark next to your domain
   - If still pending, wait 10-15 minutes for DNS propagation

3. **Test Your Website:**
   - Visit `https://yourdomain.com`
   - Verify all pages load correctly
   - Test contact form submission
   - Check admin dashboard access

### Troubleshooting

**Domain not working after 30 minutes?**
- Check DNS records are exactly as specified above
- Ensure no conflicting DNS records exist
- Contact Namecheap support if DNS issues persist

**SSL certificate issues?**
- Wait 24 hours for full propagation
- Check that DNS records point to Vercel
- SSL certificates are automatically renewed by Vercel

**Redirect issues?**
- Ensure both @ and www records are configured
- Vercel automatically handles www → non-www redirects

### Expected Timeline
- DNS configuration: 5 minutes
- DNS propagation: 10-30 minutes
- SSL certificate: 5-10 minutes after propagation
- **Total: 20-45 minutes** 