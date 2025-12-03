# Modern Portfolio - Next.js + Tailwind CSS

A clean, modern, and responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, accessibility best practices, and easy customization.

## 🚀 Features

- **Single-page responsive design** - Works beautifully on all devices
- **Modern UI/UX** - Clean design with smooth micro-interactions
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation
- **Static export** - Can be hosted on GitHub Pages, Netlify, Vercel, or any static host
- **Easy customization** - All personal info in one place
- **Project showcase** - Display public projects and in-development work
- **Smooth animations** - CSS-only animations with IntersectionObserver for scroll reveals
- **SEO optimized** - Proper meta tags and semantic HTML

## 📦 Tech Stack

- **Next.js 14** - React framework with static export
- **Tailwind CSS 3** - Utility-first CSS framework
- **React 18** - UI library
- **No heavy dependencies** - Minimal, fast-loading bundle

## 🎨 Color Palette

- **Midnight Navy**: `#0F172A` - Primary background
- **Electric Teal**: `#06B6D4` - Accent color
- **Soft Coral**: `#FF7A7A` - Secondary accent
- **Warm Sand**: `#F5E6D3` - Primary text
- **Muted Slate**: `#64748B` - Secondary text

## 🛠️ Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The static site will be in the 'out' folder
```

Visit `http://localhost:3000` to see your portfolio!

## ✏️ Customization Guide

### 1. Edit Personal Information

Open `app/page.js` and update the `META` object at the top:

```javascript
export const META = {
  name: "Your Name",
  description: "Your tagline or role",
  cvLink: "/cv.pdf",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourprofile",
  email: "your.email@example.com"
}
```

### 2. Add Your Profile Image

Replace `public/profile.jpg` with your own photo. Supported formats: JPG, PNG, or use the included SVG placeholder.

### 3. Update Projects

In the same file (`app/page.js`), edit the `PROJECTS` array:

```javascript
export const PROJECTS = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description here...",
    tech: ["React", "Node.js", "MongoDB"], // Tech stack tags
    github: "https://github.com/username/repo", // Or null for private
    status: "public" // or "development"
  },
  // Add more projects...
]
```

**For in-development projects**, set:
- `github: null`
- `status: "development"`

This will show a disabled button with "Link Coming Soon" instead of a GitHub link.

### 4. Update Skills

Edit the `SKILLS` object in `app/page.js` with three categories:

```javascript
export const SKILLS = {
  development: ["Next.js", "React", "TypeScript", ...],
  devops: ["Docker", "Kubernetes", "AWS", ...],
  ml: ["Scikit-learn", "Pandas", "NumPy", ...]
}
```

### 5. Replace Your CV

Place your actual CV file in the `public` folder and name it `cv.pdf`. Or update the `cvLink` in `META` to point to your file name.

### 6. Update About Section

Edit the bio text in `components/About.js`:

```javascript
<p className="text-lg text-muted-slate leading-relaxed text-center max-w-3xl mx-auto">
  Your bio here...
</p>
```

### 7. Change Logo/Initials

Open `components/Header.js` and update the logo:

```javascript
<div className="text-2xl font-bold text-electric-teal...">
  YourInitials
</div>
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Main page (edit META, PROJECTS, SKILLS here)
├── components/
│   ├── Header.js            # Sticky header with logo & social links
│   ├── Hero.js              # Hero section with name & CTAs
│   ├── Projects.js          # Projects section wrapper
│   ├── ProjectCard.js       # Individual project card component
│   ├── About.js             # About/bio section
│   └── Footer.js            # Footer with contact links
├── public/
│   └── cv.pdf               # Your CV (replace this!)
├── tailwind.config.js       # Tailwind configuration with custom colors
├── next.config.js           # Next.js config (static export enabled)
└── package.json             # Dependencies
```

## 🌐 Deployment

### Static Export (GitHub Pages, Netlify, Vercel)

```bash
npm run build
```

The static site will be generated in the `out/` folder. Upload this folder to your hosting service.

### GitHub Pages

1. Build: `npm run build`
2. Push the `out/` folder to your `gh-pages` branch
3. Enable GitHub Pages in repo settings

### Netlify / Vercel

Simply connect your repo - they'll auto-detect Next.js and build it for you!

## 🎯 Key Features Explained

### Smooth Animations

- **Hero section**: Fades in and slides up on page load
- **Project cards**: Lift effect with shadow on hover
- **Scroll reveals**: Sections fade in when scrolling into view (using IntersectionObserver)
- **Buttons**: Scale and color transitions on hover

### Accessibility

- Semantic HTML (`header`, `main`, `section`, `footer`, `article`)
- ARIA labels on all interactive elements
- Keyboard navigation support
- High color contrast ratios
- Focus indicators on all focusable elements

### Project Status Handling

- **Public projects**: Show GitHub link button
- **In-development projects**: Show disabled button with "Link Coming Soon" and status badge

## 🔧 Customization Tips

### Changing Colors

Edit `tailwind.config.js` to change the color palette:

```javascript
colors: {
  'midnight': '#YourColor',
  'electric-teal': '#YourColor',
  // etc...
}
```

### Adding More Sections

Create a new component in `components/` and import it in `app/page.js`:

```javascript
import NewSection from '@/components/NewSection'

// In the component:
<NewSection />
```

### Adjusting Animations

Edit animation timing in `tailwind.config.js`:

```javascript
animation: {
  'fade-in-up': 'fadeInUp 1s ease-out', // Change duration here
}
```

## 📝 License

Free to use for personal portfolios. Feel free to customize and deploy!

## 🤝 Support

If you have questions or run into issues:
1. Check the customization guide above
2. Review the comments in the code
3. Ensure all dependencies are installed

---

**Built with React + Next.js + Tailwind CSS** ♥
