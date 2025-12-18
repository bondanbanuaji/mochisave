# 🚀 MochiSave Deployment Guide

Complete guide for deploying MochiSave to production.

## 📋 Pre-Deployment Checklist

### Required Services
- [ ] Vercel account (for hosting)
- [ ] MySQL database (PlanetScale recommended)
- [ ] Google Cloud Console project (OAuth)
- [ ] Stripe account (payments)
- [ ] Domain name (optional but recommended)

### Environment Variables
Ensure all these are configured in your deployment platform:

```env
# Database
DATABASE_URL="mysql://..."

# NextAuth
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Google OAuth
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# Stripe (Optional for MVP)
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Optional Services
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
RAPIDAPI_KEY=""
```

---

## 🗄️ Database Setup (PlanetScale)

### 1. Create Database

```bash
# Install PlanetScale CLI
brew install planetscale/tap/pscale

# Login
pscale auth login

# Create database
pscale database create mochisave --region us-east

# Create branch
pscale branch create mochisave main
```

### 2. Get Connection String

```bash
# Get connection string
pscale connect mochisave main

# Or create password
pscale password create mochisave main production
```

### 3. Run Migrations

```bash
# Update DATABASE_URL in .env
# Then run migrations
npx prisma migrate deploy
npx prisma generate
```

---

## 🔐 Google OAuth Setup

### 1. Create Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project: "MochiSave"
3. Enable Google+ API

### 2. Create OAuth Credentials
1. Navigate to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client ID"
3. Application type: Web application
4. Name: "MochiSave Production"

### 3. Configure Authorized URIs

**Authorized JavaScript origins:**
```
https://yourdomain.com
https://www.yourdomain.com
```

**Authorized redirect URIs:**
```
https://yourdomain.com/api/auth/callback/google
https://www.yourdomain.com/api/auth/callback/google
```

### 4. Copy Credentials
- Copy Client ID → `GOOGLE_CLIENT_ID`
- Copy Client Secret → `GOOGLE_CLIENT_SECRET`

---

## 💳 Stripe Setup (Optional)

### 1. Create Account
- Sign up at [Stripe](https://stripe.com/)
- Activate your account

### 2. Get API Keys
1. Go to Developers > API keys
2. Copy:
   - Publishable key → `STRIPE_PUBLISHABLE_KEY`
   - Secret key → `STRIPE_SECRET_KEY`

### 3. Create Products
1. Go to Products
2. Create products for:
   - Premium Plan ($9/month)
   - Pro Plan ($29/month)

### 4. Setup Webhook
1. Go to Developers > Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
4. Copy webhook secret → `STRIPE_WEBHOOK_SECRET`

---

## ▲ Vercel Deployment

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com/)
   - Click "Import Project"
   - Select your repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: .next

3. **Add Environment Variables**
   - Go to Settings > Environment Variables
   - Add all variables from `.env.example`
   - Make sure to use production values

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live! 🎉

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

---

## 🌐 Custom Domain Setup

### 1. Add Domain to Vercel
1. Go to your project settings
2. Navigate to Domains
3. Add your domain: `yourdomain.com`

### 2. Configure DNS

Add these records to your domain provider:

**For Apex Domain (yourdomain.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. SSL Certificate
- Vercel automatically provisions SSL certificates
- Wait 1-2 minutes for certificate to activate
- HTTPS will be enabled automatically

### 4. Update OAuth Redirect URIs
- Update Google OAuth console with new domain
- Update `NEXTAUTH_URL` environment variable
- Redeploy application

---

## 🔍 Post-Deployment Verification

### 1. Test Authentication
- [ ] Visit homepage
- [ ] Click "Sign In"
- [ ] Sign in with Google
- [ ] Verify user is logged in
- [ ] Check database for user record

### 2. Test Download Feature
- [ ] Paste a valid URL
- [ ] Click download
- [ ] Verify download record created
- [ ] Check download status updates

### 3. Test Rate Limiting
- [ ] Make multiple downloads as guest
- [ ] Verify rate limit kicks in after 10 downloads
- [ ] Test with logged-in user

### 4. Test Payment Flow (if Stripe enabled)
- [ ] Go to pricing page
- [ ] Click "Go Premium"
- [ ] Complete test payment
- [ ] Verify subscription in database
- [ ] Verify user role updated

### 5. Test All Pages
- [ ] Homepage loads correctly
- [ ] All platform pages load
- [ ] About page
- [ ] Contact page
- [ ] Pricing page
- [ ] Terms & Privacy pages

---

## 🐛 Troubleshooting

### Build Failures

**Error: Module not found**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

**Error: Prisma Client not generated**
```bash
# Add to package.json scripts:
"postinstall": "prisma generate"
```

### Database Connection Issues

**Error: Can't reach database server**
- Check DATABASE_URL is correct
- Verify database is running
- Check IP whitelist (for PlanetScale)

```bash
# Test connection
npx prisma db push
```

### OAuth Issues

**Error: redirect_uri_mismatch**
- Verify redirect URI in Google Console matches exactly
- Check NEXTAUTH_URL environment variable
- Ensure protocol is HTTPS in production

### Rate Limiting Not Working

**Downloads not being limited**
```typescript
// Check if Redis is connected (if using Redis)
// Or verify in-memory store is working
```

---

## 📊 Monitoring & Analytics

### Vercel Analytics
1. Enable in project settings
2. View metrics dashboard
3. Monitor:
   - Page views
   - Performance scores
   - Error rates

### Database Monitoring (PlanetScale)
- Check connection count
- Monitor query performance
- Set up alerts for issues

### Error Tracking (Recommended: Sentry)
```bash
npm install @sentry/nextjs

# Configure Sentry
npx @sentry/wizard -i nextjs
```

---

## 🔄 Continuous Deployment

### Automatic Deployments
Vercel automatically deploys when you push to main branch.

### Preview Deployments
Every pull request gets a preview URL:
```
https://mochisave-git-feature-branch.vercel.app
```

### Rollback
If something goes wrong:
1. Go to Vercel dashboard
2. Click "Deployments"
3. Find last working deployment
4. Click "..." menu > "Promote to Production"

---

## 🔐 Security Best Practices

### Environment Variables
- [ ] Never commit `.env` files
- [ ] Use strong secrets
- [ ] Rotate keys regularly
- [ ] Use different keys for dev/prod

### Database
- [ ] Enable SSL connections
- [ ] Use connection pooling
- [ ] Regular backups
- [ ] Monitor for suspicious activity

### Application
- [ ] Keep dependencies updated
- [ ] Enable security headers
- [ ] Implement CORS properly
- [ ] Regular security audits

---

## 📱 Performance Optimization

### Vercel Settings
```javascript
// next.config.js
module.exports = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
}
```

### Database Optimization
```typescript
// Use connection pooling
datasource db {
  provider = "mysql"
  url = env("DATABASE_URL")
  relationMode = "prisma"
}
```

---

## 🎉 Launch Checklist

### Final Steps Before Launch
- [ ] All tests passing
- [ ] Documentation updated
- [ ] Environment variables configured
- [ ] Database migrated
- [ ] OAuth configured
- [ ] Custom domain setup
- [ ] SSL certificate active
- [ ] All features tested
- [ ] Error tracking enabled
- [ ] Analytics configured
- [ ] SEO meta tags added
- [ ] Social media images set
- [ ] Sitemap generated
- [ ] robots.txt configured

### Post-Launch
- [ ] Monitor error rates
- [ ] Check performance metrics
- [ ] Verify all emails working
- [ ] Test payment flow
- [ ] Monitor user feedback
- [ ] Set up status page
- [ ] Create backup strategy

---

## 📞 Support

If you encounter issues during deployment:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Check [Next.js Documentation](https://nextjs.org/docs)
3. Review deployment logs
4. Contact support@mochisave.com

---

## 🎊 Congratulations!

Your MochiSave platform is now live! 🚀

Don't forget to:
- Share on social media
- Gather user feedback
- Iterate and improve
- Monitor performance

**Happy Deploying! 🍡**
