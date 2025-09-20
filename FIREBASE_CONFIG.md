# DTVitor Firebase Configuration Guide

## Firebase Console Configuration

After creating your Firebase project, configure these settings:

### 1. Project Settings
- **Project Name**: dtvitor-firebase (or your chosen name)
- **Project ID**: Will be auto-generated
- **Resource Location**: Choose closest to your users

### 2. Hosting Configuration
1. Go to Hosting in Firebase Console
2. Click "Get Started"
3. Your domain will be: `https://PROJECT-ID.web.app`

### 3. Functions Configuration (Optional)
1. Go to Functions in Firebase Console
2. Upgrade to Blaze plan (pay-as-you-go) if you want to use Functions
3. **Note**: Hosting works without Functions on free plan

### 4. Custom Domain (Optional)
1. In Hosting section, click "Add custom domain"
2. Follow the verification steps
3. Firebase will provide SSL certificate automatically

## Environment Variables

For production deployment, consider these variables:

```bash
# Firebase project ID
FIREBASE_PROJECT_ID=your-project-id

# Optional: Custom domain
CUSTOM_DOMAIN=your-domain.com

# Optional: Analytics ID
ANALYTICS_ID=your-analytics-id
```

## Performance Tips

- Use Firebase CDN for global fast loading
- Enable compression in hosting settings
- Optimize images before uploading
- Use lazy loading for images
- Minify CSS/JS for production

## Security Notes

- Never commit Firebase private keys
- Use environment variables for sensitive data
- Enable security rules for Functions
- Monitor usage in Firebase Console

## Monitoring

Check these metrics in Firebase Console:
- **Hosting**: Bandwidth usage, storage
- **Functions**: Invocations, errors, duration
- **Analytics**: User engagement, performance