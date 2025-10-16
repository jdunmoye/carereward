# 🗺️ Complete Google Maps API Integration Guide

## 📋 Overview
This guide will walk you through integrating Google Maps API into your CareReward application to replace the current SVG map with a real, interactive Google Maps implementation.

## 🎯 What You'll Get
- Real Google Maps with actual NYC geography
- Interactive borough overlays with health data
- Professional, realistic map appearance
- No more fake rectangular shapes

---

## Step 1: Get Google Maps API Key

### 1.1 Create Google Cloud Project
1. **Go to**: [Google Cloud Console](https://console.cloud.google.com/)
2. **Sign in** with your Google account
3. **Create a new project**:
   - Click "Select a project" → "New Project"
   - Name: `CareReward Maps` (or any name you prefer)
   - Click "Create"

### 1.2 Enable Required APIs
1. **In the Google Cloud Console**, go to "APIs & Services" → "Library"
2. **Enable these APIs** (search for each and click "Enable"):
   - **Maps JavaScript API** (required for the map)
   - **Geocoding API** (optional, for address lookup)
   - **Places API** (optional, for places search)

### 1.3 Create API Key
1. **Go to**: "APIs & Services" → "Credentials"
2. **Click**: "Create Credentials" → "API Key"
3. **Copy the API key** (you'll need this later)
4. **Click "Restrict Key"** for security:
   - **Application restrictions**: HTTP referrers
   - **Add referrers**:
     - `http://localhost:5173/*` (for development)
     - `https://yourusername.github.io/carereward/*` (for GitHub Pages)
   - **API restrictions**: Select "Restrict key" and choose:
     - Maps JavaScript API
     - Geocoding API (if you enabled it)

---

## Step 2: Set Up Environment Variables

### 2.1 Create Environment File
1. **In your project root** (`carealign-rewards` folder), create a file named `.env.local`
2. **Add your API key**:
```bash
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### 2.2 Example Environment File
```bash
# Google Maps API Key
VITE_GOOGLE_MAPS_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Note: Replace with your actual API key from Google Cloud Console
```

### 2.3 Security Note
- **Never commit** `.env.local` to version control
- The file is already in `.gitignore` to prevent accidental commits
- Keep your API key private and secure

---

## Step 3: Install Required Dependencies

### 3.1 Install Google Maps React Wrapper
```bash
npm install @googlemaps/react-wrapper @googlemaps/js-api-loader
```

### 3.2 Verify Installation
```bash
npm list @googlemaps/react-wrapper @googlemaps/js-api-loader
```

---

## Step 4: Update Your Code

### 4.1 The GoogleMapsNYC Component is Already Created
The `src/components/GoogleMapsNYC.tsx` file is already set up with:
- Real NYC borough boundaries
- Interactive overlays
- Health data integration
- Professional styling

### 4.2 Update CurrentSituation.tsx
Change the import in `src/pages/CurrentSituation.tsx`:

```typescript
// Change this line:
import SimpleNYCMap from '../components/SimpleNYCMap';

// To this:
import GoogleMapsNYC from '../components/GoogleMapsNYC';
```

And update the component usage:
```typescript
// Change this:
const NYCInteractiveMap: React.FC<{ geographicData: any[] }> = ({ geographicData }) => {
  return <SimpleNYCMap geographicData={geographicData} />;
};

// To this:
const NYCInteractiveMap: React.FC<{ geographicData: any[] }> = ({ geographicData }) => {
  return <GoogleMapsNYC geographicData={geographicData} />;
};
```

---

## Step 5: Test the Integration

### 5.1 Start Development Server
```bash
npm run dev
```

### 5.2 Verify the Map Loads
1. **Open**: `http://localhost:5173`
2. **Navigate to**: Current Situation page
3. **Check**: You should see a real Google Maps with NYC borough overlays

### 5.3 Test Interactivity
- **Click boroughs** to see health data popups
- **Verify**: Map loads without errors
- **Check console**: No API key errors

---

## Step 6: Deploy to GitHub Pages

### 6.1 Update Environment for Production
For GitHub Pages deployment, you'll need to set the API key in your repository secrets:

1. **Go to**: Your GitHub repository → Settings → Secrets and variables → Actions
2. **Add new secret**:
   - Name: `VITE_GOOGLE_MAPS_API_KEY`
   - Value: Your actual API key

### 6.2 Update GitHub Pages Referrers
1. **Go back to**: Google Cloud Console → APIs & Services → Credentials
2. **Edit your API key**
3. **Add GitHub Pages referrer**:
   - `https://yourusername.github.io/carereward/*`
   - Replace `yourusername` with your actual GitHub username

### 6.3 Deploy
```bash
npm run deploy
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue 1: "API key not valid" Error
**Solution**:
- Verify your API key is correct
- Check that Maps JavaScript API is enabled
- Ensure referrers are set correctly

#### Issue 2: "RefererNotAllowedMapError"
**Solution**:
- Add your domain to the API key restrictions
- Include both `localhost:5173` and your GitHub Pages URL

#### Issue 3: Map Not Loading
**Solution**:
- Check browser console for errors
- Verify environment variable is set correctly
- Ensure API key has proper permissions

#### Issue 4: Billing Required
**Solution**:
- Google Maps requires billing to be enabled
- Add a payment method in Google Cloud Console
- Don't worry - you get $200 free credits monthly

---

## 💰 Cost Information

### Google Maps Pricing (as of 2024)
- **Maps JavaScript API**: $7 per 1,000 loads
- **Free tier**: $200 credit monthly (≈28,500 map loads)
- **For your use case**: Likely within free tier

### Cost Optimization Tips
1. **Enable billing alerts** in Google Cloud Console
2. **Monitor usage** in the console
3. **Consider caching** for frequently accessed maps
4. **Use map restrictions** to prevent unauthorized usage

---

## 🎯 Final Result

After completing this integration, you'll have:

✅ **Real Google Maps** - Actual NYC geography  
✅ **Interactive Boroughs** - Click to see health data  
✅ **Professional Appearance** - No more fake shapes  
✅ **Responsive Design** - Works on all devices  
✅ **Secure Implementation** - API key properly restricted  

---

## 📞 Support

If you encounter any issues:

1. **Check the console** for error messages
2. **Verify API key** in Google Cloud Console
3. **Test with a simple map** first
4. **Check billing** is enabled
5. **Review referrer restrictions**

---

## 🚀 Next Steps

Once the basic integration is working:

1. **Customize map styling** for your brand
2. **Add more interactive features**
3. **Implement map clustering** for better performance
4. **Add search functionality**
5. **Integrate with real-time data**

This integration will give you a professional, realistic NYC map that perfectly complements your healthcare dashboard!
