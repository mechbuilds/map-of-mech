# The Map of Mech 🗺️

A cinematic, interactive personal blog and portfolio built with React, TypeScript, and Vite.

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue) ![Vite](https://img.shields.io/badge/Vite-8.0-purple) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-teal) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.36-pink)

---

## 🚀 Live Demo

[Live Demo](https://map-of-mech.netlify.app/)

---

## 📌 About The Project

The Map of Mech is a full stack personal blog and interactive portfolio built entirely from scratch. A personal life story is presented as an **interactive node-based world map** — each clickable node reveals a chapter of the journey.

The site showcases four core experiences:

- **Interactive Map** — A cinematic SVG world map with animated story nodes and a plane that travels between them
- **Blog** — 17 original posts across 6 content pillars with individual article pages
- **Positions Log** — An archive of real public comments and positions
- **About & Contact** — Biography with photo gallery and a functional contact form

---

## ✨ Features

- Cinematic intro sequence with multi-phase animation timeline
- Interactive SVG world map with 7 clickable story nodes
- Animated plane following user progression via quadratic Bézier curves
- Slide-in story panels with typewriter headline effect
- Full blog system — 17 posts across 6 content pillars
- Disclaimer modal with session-aware one-time display
- Positions log archiving real public comments
- About page with three-photo gallery and animated biography
- Functional contact form wired to Formspree
- Custom cursor with spring physics ring
- Animated starfield canvas background
- Film grain and scanline atmosphere overlays
- Progress tracking bar that updates as chapters are read
- Responsive navigation pill with active state indicator

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite | Frontend framework & build tool |
| TypeScript | Type safety |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Animations & spring physics effects |
| React Router DOM v6 | Client-side routing |
| React Hook Form | Form handling & validation |
| Lucide React | Icons |
| Shadcn UI | UI components |
| Formspree | Contact form delivery |
| npm | Package manager |

---

## 🚀 Getting Started

**Prerequisites**

- [Node.js](https://nodejs.org/) installed on your machine
- Node.js 18+

**Installation**

```bash
# Clone the repository
git clone https://github.com/your-username/map-of-mech.git

# Navigate to the project
cd map-of-mech

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

**Build for Production**

```bash
npm run build
```

This creates a `dist/` folder ready for deployment.

---

## 📁 Project Structure

```
map-of-mech/
├── public/
├── src/
│   ├── components/        # 9 global UI components
│   │   ├── ui/            # Shadcn UI components
│   │   ├── CustomCursor.tsx
│   │   ├── DisclaimerModal.tsx
│   │   ├── FilmGrain.tsx
│   │   ├── IntroSequence.tsx
│   │   ├── NavPill.tsx
│   │   ├── Starfield.tsx
│   │   ├── StoryPanel.tsx
│   │   └── WorldMapSVG.tsx
│   ├── data/
│   │   ├── chapters.ts    # 7 story node definitions
│   │   └── blog.ts        # 17 blog post objects
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── BlogPage.tsx
│   │   ├── BlogPostPage.tsx
│   │   ├── PositionsPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   └── App.tsx
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## 👥 Team

| Name | Role |
|---|---|
| Mech | Founder & Sole Developer — US-based |

---

## 📬 Contact

- 📧 Email: mechnickell@gmail.com
- 📍 Location: United States (Remote)
- ⏱ Response Within 24 hours

---

## 📄 License

© 2026 Mech. All rights reserved.

---

*Made in the US — Built Globally*
