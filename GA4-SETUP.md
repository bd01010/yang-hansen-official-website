# Google Analytics 4 Setup Instructions

## Quick Setup Steps:

1. **Create GA4 Property**
   - Go to https://analytics.google.com
   - Click "Admin" (gear icon)
   - Click "Create Property"
   - Property name: "Yang Hansen Official"
   - Website URL: yanghansenofficial.com
   - Industry: Sports
   - Time zone: China Standard Time

2. **Get Your Measurement ID**
   - After creating property, go to "Data Streams"
   - Click on your web stream
   - Copy the Measurement ID (starts with G-)

3. **Update Website**
   - Replace `G-PLACEHOLDER` in index.html with your Measurement ID
   - Deploy changes

## What We're Tracking:

- Page views
- User geography (especially China vs US)
- Traffic sources
- Video engagement (when videos are added)
- User behavior flow

## Enhanced Tracking Features:

- Scroll tracking (automatic)
- Outbound clicks (automatic)
- Site search (if added)
- File downloads (automatic)
- Video engagement (custom implementation ready)

## For AdSense Integration:

Once you have traffic data (usually 1-2 weeks), you can:
1. Link GA4 to AdSense
2. Use audience insights for ad optimization
3. Track ad revenue by page

## Verify It's Working:

1. Open website in browser
2. Open browser console (F12)
3. Look for "gtag" messages
4. Check GA4 Realtime reports