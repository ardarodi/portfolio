# 🚀 Ahmet Yilmaz - Portfolio

Premium blurple-themed personal portfolio website built with React, TailwindCSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.0-FF0055?style=flat&logo=framer)

## ✨ Features

- **Blurple Theme** - Deep navy/black base with purple neon highlights
- **Glassmorphism Design** - Frosted glass cards with elegant glow effects
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Fully Responsive** - Mobile-first design, works on all devices
- **Single Page App** - Smooth scroll navigation between sections
- **Project Filtering** - Filter projects by category (Full Stack, Frontend, Backend)
- **Contact Form** - Ready-to-integrate contact form
- **SEO Friendly** - Semantic HTML structure

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Shadcn/ui** - UI Components

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/username/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
yarn install

# Start development server
yarn start
```

## 🚀 Deployment (GitHub Pages)

### 1. Update `package.json`

Add homepage field:
```json
{
  "homepage": "https://username.github.io/portfolio"
}
```

Add deploy scripts:
```json
{
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

### 2. Install gh-pages

```bash
yarn add gh-pages
```

### 3. Update Router (Important!)

In `src/App.js`, change `BrowserRouter` to `HashRouter`:

```jsx
import { HashRouter } from 'react-router-dom';

// Replace BrowserRouter with HashRouter
<HashRouter>
  <Routes>
    ...
  </Routes>
</HashRouter>
```

### 4. Deploy

```bash
yarn deploy
```

Your site will be live at `https://username.github.io/portfolio`

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Shared components
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Skills, Projects, etc.
│   └── ui/              # Shadcn UI components
├── data/
│   └── mock.js          # Portfolio data (customize this!)
├── hooks/
│   └── use-toast.js     # Toast notifications
├── App.js
└── index.css            # Global styles & theme
```

## ⚙️ Customization

Edit `src/data/mock.js` to update:

- **Personal Info** - Name, title, bio, social links
- **Skills** - Frontend, backend, database, tools
- **Projects** - Add your own projects with images
- **Experience** - Work history and education
- **Testimonials** - Recommendations

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by [Ahmet Yilmaz](https://github.com/username)
