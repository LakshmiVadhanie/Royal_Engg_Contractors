# Royal Engineering Contractors - Website

A modern, dynamic website for **Royal Engineering Contractors (REC)**, built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **Framer Motion**.

![REC Website](public/images/hero.jpg)

## Features

- **Parallax Hero** with animated text and scroll effects
- **Auto-sliding Image Gallery** (two rows, opposite directions, pause on hover)
- **Filterable Project Grid** with click-to-open detail modals
- **Animated Counters** for company stats (scroll-triggered)
- **Client Marquee** with smooth infinite scroll
- **Responsive Navigation** with mobile hamburger menu
- **Contact Form** (opens email client)
- **Scroll Reveal Animations** throughout
- **Dark industrial theme** with amber accent colors

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# -> http://localhost:3000
```

## Deploy on GitHub Pages / Vercel

### Vercel (Recommended)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com), import the repo
3. Click Deploy (zero config needed)

### GitHub Pages
1. Add to `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   ```
2. Run `npm run build`
3. Push the `out/` folder to your `gh-pages` branch

## Replacing Placeholder Images

The images included are placeholders (Google Sites blocked direct downloads).
To use your dad's real project photos:

1. Go to the original site: https://sites.google.com/view/royalengineeringcontractors/home
2. Right-click each project photo and "Save Image As..."
3. Replace the files in `public/images/` with matching filenames:

| Filename | Project |
|----------|---------|
| `hero.jpg` | Hero background (use a wide industrial/project shot, 1920x1080) |
| `logo.png` | Company logo (square, ~400x400) |
| `linde-ril-jamnagar.jpg` | LINDE RIL Jamnagar project |
| `dta-steam-superheater.jpg` | DTA Steam Super Heater |
| `hp-washing-hrsg-1.jpg` | HP Washing HRSG (photo 1) |
| `hp-washing-hrsg-2.jpg` | HP Washing HRSG (photo 2) |
| `hp-washing-hrsg-3.jpg` | HP Washing HRSG (photo 3) |
| `air-products-wada.jpg` | Air Products, Wada |
| `jnk-pemex.jpg` | JNK India PEMEX |
| `technicas-reunitas.jpg` | Technicas Reunitas |
| `zeeco-mumbai.jpg` | ZEECO Mumbai |
| `tubular-conveyor-dahej.jpg` | Tubular Conveyor, Dahej |
| `toyyo-mrpl-mangalore.jpg` | TOYYO MRPL Mangalore |
| `bnscpl-ril-silvassa.jpg` | BNSCPL RIL Silvassa |
| `blaster-ppe.jpg` | Blaster with PPE |
| `ongc-mangalore.jpg` | ONGC Mangalore |
| `nscpl-technip.jpg` | NSCPL Technip India |
| `machineries.jpg` | Company Machineries |

**Tip:** For best results, use landscape photos (1280x720 or wider). The hero image should be at least 1920x1080.

## Project Structure

```
rec-website/
├── public/
│   └── images/          # All project photos
├── src/
│   ├── app/
│   │   ├── layout.js    # Root layout, fonts, metadata
│   │   └── page.js      # Main page (all sections)
│   ├── components/
│   │   ├── Navbar.js     # Fixed nav with scroll detection
│   │   ├── Hero.js       # Parallax hero with animated text
│   │   ├── About.js      # Company info + animated stats
│   │   ├── Services.js   # 4-card service grid with icons
│   │   ├── Projects.js   # Filterable grid with modal
│   │   ├── Gallery.js    # Auto-sliding image gallery
│   │   ├── Clients.js    # Client logo marquee
│   │   ├── Contact.js    # Contact info + email form
│   │   ├── Footer.js     # Site footer
│   │   ├── Counter.js    # Animated number counter
│   │   └── useReveal.js  # Scroll reveal hook
│   ├── data/
│   │   └── content.js    # All company data and projects
│   └── styles/
│       └── globals.css   # Tailwind + custom styles
├── tailwind.config.js
├── next.config.js
├── jsconfig.json
└── package.json
```

## Customization

- **Company data:** Edit `src/data/content.js` (projects, services, contact info, stats)
- **Colors:** Edit `tailwind.config.js` (navy, amber, steel palettes)
- **Fonts:** Edit `src/styles/globals.css` (Google Fonts import)
- **Sections:** Each component in `src/components/` is independent

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion 11](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons

---

Built with care for Royal Engineering Contractors, Surat, Gujarat.
