# 🚗 Otomoto Alım - Premium Vehicle Purchase Website

A professional, conversion-focused vehicle buying website built with Next.js 14, TypeScript, and Tailwind CSS. Features complete analytics integration and data-driven architecture with **Charcoal & Rose Gold** design theme.

## 🎨 Design Theme: Charcoal & Rose Gold

- **Primary Color**: #2C2C2C (Charcoal) - Professional, premium
- **Accent Color**: #B76E79 (Rose Gold) - Sophisticated, elegant
- **Design Style**: Rounded corners, soft shadows, premium feel
- **Target**: B2C (Individual car owners)

## ✨ Key Features

### 1. Data-Driven Architecture
- All content in TypeScript data files (`src/data/`)
- Type-safe with comprehensive interfaces
- Easy content management without touching components
- Scalable for multiple clients

### 2. Complete Tracking Integration
✅ **Google Tag Manager (GTM)**  
✅ **Google Analytics 4 (GA4)**  
✅ **Google Ads conversion tracking**  
✅ **Facebook Pixel**  
✅ **Custom event tracking** for all interactions

### 3. Dynamic Routing
- **Services**: `/kazali-arac-alim`, `/hasarli-arac-alim`, `/pert-arac-alim`, `/hurda-arac-alim`
- **Cities**: `/sehirler/istanbul`, `/sehirler/ankara`, `/sehirler/izmir`, `/sehirler/bursa`, `/sehirler/antalya`

### 4. Heavy CTA Focus
- 20+ conversion points per page
- Floating phone & WhatsApp buttons
- Multiple CTA sections
- All clicks tracked

### 5. Services Included
1. **Kazalı Araç Alımı** - Crashed vehicle purchase
2. **Hasarlı Araç Alımı** - Damaged vehicle purchase
3. **Pert Araç Alımı** - Write-off vehicle purchase
4. **Hurda Araç Alımı** - Scrap vehicle purchase

### 6. City Pages
- İstanbul (15M population)
- Ankara (5.7M population)
- İzmir (4.4M population)
- Bursa (3.1M population)
- Antalya (2.6M population)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Create Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://otomotoalim.com.tr
NEXT_PUBLIC_SITE_NAME=Otomoto Alım

# Contact Information (REPLACE WITH REAL NUMBERS!)
NEXT_PUBLIC_PHONE=+905551234567
NEXT_PUBLIC_PHONE_DISPLAY=0555 123 45 67
NEXT_PUBLIC_WHATSAPP=905551234567
NEXT_PUBLIC_EMAIL=info@otomotoalim.com.tr

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Google Ads Conversion
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL=XXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL=XXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL=XXXXXXXXXXXXX

# Facebook Pixel
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX

# Social Media
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/otomotoalim
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/otomotoalim
```

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Step 4: Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
premium-auto-alim/
├── public/
│   └── images/              # Static images
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with tracking
│   │   ├── page.tsx         # Homepage
│   │   ├── kazali-arac-alim/
│   │   ├── hasarli-arac-alim/
│   │   ├── pert-arac-alim/
│   │   ├── hurda-arac-alim/
│   │   └── sehirler/
│   │       └── [city]/      # Dynamic city pages
│   ├── components/
│   │   ├── layout/          # Header, Footer, FloatingButtons
│   │   ├── sections/        # Homepage sections
│   │   ├── ui/              # UI components (buttons, forms)
│   │   └── analytics/       # Tracking components
│   ├── data/                # 🎯 ALL CONTENT HERE
│   │   ├── types.ts         # TypeScript interfaces
│   │   ├── site.ts          # Site configuration
│   │   ├── services.ts      # Services data
│   │   ├── cities.ts        # Cities data
│   │   ├── navigation.ts    # Menu structure
│   │   ├── process.ts       # Process steps
│   │   └── cta.ts           # CTA content
│   ├── lib/
│   │   ├── utils.ts         # Helper functions
│   │   └── analytics.ts     # Tracking functions
│   └── config/
│       └── tracking.ts      # Tracking config
├── .env.local               # Environment variables (CREATE THIS!)
├── tailwind.config.ts       # Tailwind with Charcoal & Rose Gold
├── tsconfig.json
├── next.config.js
└── package.json
```

## 📝 Content Management

### Update Contact Information

Edit `src/data/site.ts`:

```typescript
export const siteConfig = {
  name: 'Your Company Name',
  phone: '+905551234567',
  whatsapp: '905551234567',
  email: 'info@yourcompany.com',
  // ... other settings
};
```

### Add/Edit Services

Edit `src/data/services.ts` - each service has:
- Meta tags (SEO)
- Hero section
- Features
- FAQs
- Content sections

### Add/Edit Cities

Edit `src/data/cities.ts` - each city has:
- Meta tags (SEO)
- Coverage areas (districts)
- City-specific features
- Local testimonials
- City-specific FAQs

### Update Navigation

Edit `src/data/navigation.ts` for menu structure.

### Update Process Steps

Edit `src/data/process.ts` for how-it-works section.

## 📊 Analytics Setup

### 1. Google Tag Manager

1. Create account at [tagmanager.google.com](https://tagmanager.google.com)
2. Create container
3. Copy GTM ID (GTM-XXXXXXX)
4. Add to `.env.local`

### 2. Google Analytics 4

1. Create property at [analytics.google.com](https://analytics.google.com)
2. Copy Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`

### 3. Google Ads Conversion Tracking

1. Go to Google Ads → Tools → Conversions
2. Create 3 conversion actions:
   - **Phone Calls** (conversion label)
   - **WhatsApp Clicks** (conversion label)
   - **Form Submissions** (conversion label)
3. Add IDs and labels to `.env.local`

### 4. Facebook Pixel

1. Create pixel at [business.facebook.com](https://business.facebook.com)
2. Copy Pixel ID
3. Add to `.env.local`

## 🎯 Tracked Events

All conversion events are automatically tracked:

| Event | Trigger | Platforms |
|-------|---------|-----------|
| `phone_click` | Any phone button click | GTM, GA4, Google Ads, FB Pixel |
| `whatsapp_click` | Any WhatsApp button click | GTM, GA4, Google Ads, FB Pixel |
| `form_submit` | Form submission | GTM, GA4, Google Ads, FB Pixel |
| `service_view` | Service page view | GTM, GA4 |
| `city_view` | City page view | GTM, GA4 |
| `cta_click` | CTA button click | GTM, GA4 |

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#YOUR_PRIMARY_COLOR',
    // ... shades
  },
  accent: {
    DEFAULT: '#YOUR_ACCENT_COLOR',
    // ... shades
  },
}
```

### Change Corner Radius

Edit `tailwind.config.ts`:

```typescript
borderRadius: {
  'DEFAULT': '0.5rem',  // Make smaller for sharper corners
  'lg': '1rem',
  // ...
}
```

### Add More Cities

1. Open `src/data/cities.ts`
2. Copy an existing city object
3. Modify all fields for new city
4. City page automatically created at `/sehirler/[new-city-slug]`

### Add More Services

1. Open `src/data/services.ts`
2. Add new service object with all required fields
3. Service page automatically created at `/[service-slug]`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Important**: Add all environment variables from `.env.local` to Vercel project settings!

### Deploy to Other Platforms

1. Build the project: `npm run build`
2. Upload `.next` folder and other necessary files
3. Set environment variables on the platform
4. Start production server: `npm start`

## 🧪 Testing Checklist

Before going live:

- [ ] All pages load correctly
- [ ] Phone buttons trigger `phone_click` event
- [ ] WhatsApp buttons trigger `whatsapp_click` event
- [ ] Forms trigger `form_submit` event
- [ ] Check GTM Debug Console for events
- [ ] Verify Google Ads conversions fire
- [ ] Test on mobile devices
- [ ] Check responsive design
- [ ] Verify all links work
- [ ] Test floating buttons on mobile
- [ ] Verify contact numbers are correct

## 📞 Contact Information

**Update these in `.env.local` and `src/data/site.ts`:**

- Phone: 0555 123 45 67 (dummy - replace!)
- WhatsApp: 905551234567 (dummy - replace!)
- Email: info@otomotoalim.com.tr (dummy - replace!)

## 🔧 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Analytics Not Working

1. Check `.env.local` has correct IDs
2. Verify no quotes around IDs
3. Check browser console for errors
4. Use GTM Preview mode to debug

### Images Not Loading

1. Add images to `public/images/`
2. Check file paths are correct
3. Ensure file names match exactly

## 📄 License

Private - All rights reserved for Otomoto Alım

## 🎯 Support

For questions or issues:
- Email: info@otomotoalim.com.tr
- Phone: 0555 123 45 67

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
**Design Theme: Charcoal & Rose Gold - Premium & Professional**
# HalilArkadasWebsite
