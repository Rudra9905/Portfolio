# Rudra Mehta — Portfolio Website

A modern, recruiter-focused personal portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**.

🔗 **Live Site:** [rudra9905.github.io/Portfolio](https://rudra9905.github.io/Portfolio/)

---

## Features

- **Hero** — Profile photo, animated terminal, gradient typography, and CTA buttons
- **About** — Bio with core expertise cards (Backend, Cloud, System Design)
- **Skills** — Grouped skill badges (Languages, Frameworks, Cloud, Databases, AI/ML, Concepts)
- **Projects** — Problem / Solution / Impact cards for Studify, IrisPay, QuickFix, and CodeIntel
- **Education & Achievements** — Degree info, hackathon wins, LeetCode stats, and AWS certificate download
- **Contact** — Direct links to Email, Phone, GitHub, and LinkedIn
- **Dark / Light Mode** — Toggle with `localStorage` persistence
- **Animations** — Scroll-reveal effects via Framer Motion
- **Responsive** — Mobile-first layout

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Framework  | React 18 + Vite                     |
| Styling    | Tailwind CSS v3                     |
| Animations | Framer Motion                       |
| Icons      | React Icons                         |
| Fonts      | Inter + JetBrains Mono (Google Fonts) |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
git clone https://github.com/Rudra9905/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```

---

## Project Structure

```
Portfolio/
├── public/                  # Static assets (copied as-is to the site root)
│   ├── avatar.png
│   ├── Rudra_Mehta_Resume.pdf
│   └── AWS Certified Cloud Practitioner certificate.pdf
├── src/
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Tailwind directives + global utilities
│   ├── context/
│   │   └── ThemeContext.jsx # Dark/light mode context
│   ├── data/
│   │   └── resumeData.js    # All portfolio content — update here
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Education.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── SectionTitle.jsx
├── .github/workflows/
│   └── deploy.yml           # GitHub Pages deployment
└── vite.config.js
```

---

## Customization

All portfolio content lives in **`src/data/resumeData.js`** — update your name, links, projects, skills, education, and achievements there without changing components.

### Static files (`public/`)

Files in `public/` are served directly at the site root. Use this folder for assets that should not be bundled by Vite:

| File | Purpose |
|------|---------|
| `public/avatar.png` | Profile photo in the hero section |
| `public/Rudra_Mehta_Resume.pdf` | Resume download button |
| `public/AWS Certified Cloud Practitioner certificate.pdf` | AWS certificate download |

After replacing a file, keep the same filename or update the matching path in `resumeData.js`.

---

## Deployment

This project is configured for **GitHub Pages** with automatic deployment on every push to `main`.

**Live URL:** `https://rudra9905.github.io/Portfolio/`

### GitHub Pages setup

1. Go to **Settings → Pages** in the repo
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically

The Vite `base` path is set to `/Portfolio/` in `vite.config.js` to match the repository name. If you rename the repo, update that value too.

### Other platforms

<details>
<summary>Vercel / Netlify</summary>

For Vercel or Netlify, set `base: '/'` in `vite.config.js`, then connect the GitHub repo or run:

```bash
npm run build
```

Deploy the `dist/` folder.

</details>

---

## Contact

- **Email:** r.v.mehta9905@gmail.com
- **GitHub:** [Rudra9905](https://github.com/Rudra9905)
- **LinkedIn:** [Rudra Mehta](https://www.linkedin.com/in/rudra-mehta9905/)

---

## License

MIT © [Rudra Mehta](https://github.com/Rudra9905)
