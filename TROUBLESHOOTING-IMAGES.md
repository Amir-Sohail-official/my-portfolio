# Troubleshooting Image Issues

## If Images Don't Show Up

### 1. Restart the Dev Server
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### 2. Clear Browser Cache
- **Chrome/Edge**: Press `Ctrl + Shift + Delete` → Clear cached images
- **Or**: Hard refresh with `Ctrl + Shift + R` or `Ctrl + F5`

### 3. Check File Names Match Exactly
Make sure the filename in your code matches the actual file:
- ✅ `/portfolio-image1.jpeg` → file: `portfolio-image1.jpeg`
- ❌ `/portfolio-image1.jpeg` → file: `Portfolio-Image1.JPEG` (case sensitive!)

### 4. Verify File Location
Images must be in the `public` folder:
```
public/
  ├── portfolio-image1.jpeg  ← Hero section
  ├── portfolio-image2.jpeg    ← About section
  └── ...
```

### 5. Check Browser Console
Open browser DevTools (F12) and check:
- Console tab for error messages
- Network tab to see if image requests are failing

### 6. Try Different Image Format
If `.jpeg` doesn't work, try:
- `.jpg`
- `.png`
- `.webp`

### 7. Use Full Path (Alternative)
If `/filename.jpg` doesn't work, try:
```jsx
src={`${window.location.origin}/portfolio-image1.jpeg`}
```

### 8. Check Vite Configuration
Make sure `vite.config.js` doesn't have any special public path settings.

## Quick Fix Checklist
- [ ] File exists in `public/` folder
- [ ] Filename matches exactly (case-sensitive)
- [ ] Dev server restarted
- [ ] Browser cache cleared
- [ ] Check browser console for errors
- [ ] Try different image format

## Current Image Setup
- **Hero Section**: `/portfolio-image1.jpeg`
- **About Section**: `/portfolio-image2.jpeg`

To change images, edit:
- `src/components/Hero.jsx` (line ~105)
- `src/components/About.jsx` (line ~17)

