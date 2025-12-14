# Profile Images Setup

## Adding Your Profile Images

You can use **different images** for different sections of your portfolio!

### Hero Section Image
1. Place your image in this `public` folder
2. Name it: `profile-image.jpg` (or `.png`, `.webp`)
3. This image appears in the **Hero section** (main landing area)
4. Recommended: Professional headshot, square format (400x400px or larger)

### About Section Image
1. Place your image in this `public` folder
2. Name it: `about-image.jpg` (or `.png`, `.webp`)
3. This image appears in the **About Me section**
4. Recommended: Different angle or setting, square/rectangular format

## Image Paths

- **Hero Section**: `/profile-image.jpg` (in `src/components/Hero.jsx`)
- **About Section**: `/about-image.jpg` (in `src/components/About.jsx`)

## Customizing Image Paths

If you want to use different filenames:

1. **For Hero Section**: Edit `src/components/Hero.jsx` line 105
   ```jsx
   src="/your-hero-image.jpg"
   ```

2. **For About Section**: Edit `src/components/About.jsx` line 17
   ```jsx
   src="/your-about-image.jpg"
   ```

## Supported Formats
- JPG / JPEG
- PNG
- WebP

## Fallback

If an image is not found, a placeholder will be displayed automatically.

