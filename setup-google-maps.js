#!/usr/bin/env node

/**
 * Google Maps API Setup Helper Script
 * This script helps you set up Google Maps API integration
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🗺️  Google Maps API Setup Helper\n');

// Check if .env.local exists
const envPath = path.join(__dirname, '.env.local');
const envExists = fs.existsSync(envPath);

if (!envExists) {
  console.log('📝 Creating .env.local file...');
  
  const envContent = `# Google Maps API Key
# Get your API key from: https://console.cloud.google.com/google/maps-apis
# Enable these APIs: Maps JavaScript API, Geocoding API
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Instructions:
# 1. Go to https://console.cloud.google.com/
# 2. Create a new project or select existing one
# 3. Enable Maps JavaScript API
# 4. Create API key
# 5. Replace 'your_google_maps_api_key_here' with your actual API key
# 6. Restart your development server: npm run dev
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file');
} else {
  console.log('✅ .env.local file already exists');
}

// Check if dependencies are installed
console.log('\n📦 Checking dependencies...');

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const requiredDeps = ['@googlemaps/react-wrapper', '@googlemaps/js-api-loader'];
const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep] && !packageJson.devDependencies[dep]);

if (missingDeps.length > 0) {
  console.log(`❌ Missing dependencies: ${missingDeps.join(', ')}`);
  console.log('📥 Install them with: npm install @googlemaps/react-wrapper @googlemaps/js-api-loader');
} else {
  console.log('✅ All required dependencies are installed');
}

// Check if GoogleMapsNYC component exists
const googleMapsComponentPath = path.join(__dirname, 'src', 'components', 'GoogleMapsNYC.tsx');
const componentExists = fs.existsSync(googleMapsComponentPath);

if (componentExists) {
  console.log('✅ GoogleMapsNYC component exists');
} else {
  console.log('❌ GoogleMapsNYC component not found');
}

console.log('\n🎯 Next Steps:');
console.log('1. Get your Google Maps API key from: https://console.cloud.google.com/');
console.log('2. Add it to .env.local file');
console.log('3. Update CurrentSituation.tsx to use GoogleMapsNYC component');
console.log('4. Run: npm run dev');
console.log('5. Test the map at: http://localhost:5173');

console.log('\n📚 For detailed instructions, see: GOOGLE_MAPS_INTEGRATION_GUIDE.md');
console.log('\n🚀 Happy mapping!');
