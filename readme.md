# Bruno Pollato — Frontend Developer Portfolio

A production-ready, single-page portfolio website built with **React 19 + Vite + TypeScript + Tailwind CSS v4**.

## ✨ Features

- Dark, modern design with a consistent colour system
- Fully responsive (mobile, tablet, desktop)
- All sections: Hero, About, Skills, Projects, Experience/Education, Contact, Footer
- Accessible — semantic HTML, keyboard navigation, sufficient contrast, ARIA labels
- SEO basics — page title, meta description, Open Graph & Twitter Card tags
- Contact form with optimistic UI (wire up to Formspree / EmailJS / your backend)
- Smooth hover/transition animations

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start development server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## 🎨 Customisation

All editable content lives in one file:

```
src/data.ts
```

Open it and update:

| Export | What to edit |
|---|---|
| `siteConfig` | Your name, title, email, social links, description |
| `aboutText` | Two paragraphs about yourself |
| `skills` | Skill categories and items |
| `projects` | Project cards (title, description, tech, GitHub/demo links) |
| `experience` | Work history and education entries |

### Colours & design tokens

Design tokens are defined as CSS custom properties in `src/index.css`:

```css
:root {
  --color-bg: #0f0f13;
  --color-surface: #17171f;
  --color-border: #2a2a38;
  --color-accent: #6366f1;
  --color-accent-hover: #818cf8;
  --color-text: #e2e2f0;
  --color-muted: #8b8ba8;
}
```

### Contact form

The contact form in `src/components/Contact.tsx` currently simulates a successful send with a timeout. To wire it up, replace the `await new Promise(…)` placeholder with your preferred service:

- **[Formspree](https://formspree.io/)** — free tier, no backend needed
- **[EmailJS](https://www.emailjs.com/)** — sends directly from the browser
- Your own API route if you have a backend

### OG / Twitter image

Add a `og-image.png` (1200 × 630 px) to the `public/` folder to enable rich social sharing previews.

## 📁 Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── og-image.png      ← add your own
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data.ts            ← edit your content here
│   ├── index.css
│   ├── App.tsx
│   └── main.tsx
├── index.html             ← SEO meta tags are here
├── vite.config.ts
└── tsconfig.json
```

## 🛠 Tech stack

- [React 19](https://react.dev/)
- [Vite 6](https://vite.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Inter font](https://fonts.google.com/specimen/Inter) via Google Fonts

## 📄 Licence

MIT — do whatever you like with it.
