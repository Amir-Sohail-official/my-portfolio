# my-portfolio
# Amir Khan - Portfolio Website

A professional portfolio website for a MERN Stack Full-Stack Developer built with React and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, recruiter-friendly UI with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Professional Sections**:
  - Hero section with call-to-action buttons
  - About Me section
  - Skills showcase (Frontend, Backend, Tools)
  - Projects portfolio
  - Backend experience details
  - Contact information

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository or navigate to the project directory:
```bash
cd amir-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## 📝 Customization

### Add Your Profile Image

1. Place your profile image in the `public` folder
2. Name it: `profile-image.jpg` (or `.png`, `.webp`)
3. Recommended: 400x400px or larger, square aspect ratio
4. The image will automatically appear in the Hero and About sections
5. See `public/README-IMAGES.md` for more details

### Update Personal Information

- **Hero Section**: Edit `src/components/Hero.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Contact Links**: Edit `src/components/Contact.jsx` and `src/components/Hero.jsx`
- **Projects**: Edit `src/components/Projects.jsx`
- **Skills**: Edit `src/components/Skills.jsx`

### Update Social Links

Update the links in:
- `src/components/Hero.jsx` (social icons)
- `src/components/Contact.jsx` (contact cards)

Replace placeholder URLs with your actual:
- LinkedIn profile URL
- GitHub profile URL
- Email address

### Update Project Links

In `src/components/Projects.jsx`, update:
- `liveDemo` - Your project's live URL
- `github` - Your project's GitHub repository URL

## 📁 Project Structure

```
amir-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── BackendExperience.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Styling

The project uses Tailwind CSS for styling. Custom colors and utilities are defined in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Custom CSS utilities and base styles

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ by Amir Sohail

