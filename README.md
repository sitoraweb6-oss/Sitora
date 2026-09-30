# Sitora Web — Agency Website

Source code for the **Sitora Web** agency website — a premium full-service digital agency based in Bangladesh, delivering custom high-performing websites, digital marketing strategy, and e-commerce solutions.

> **Note:** The full application lives inside the [`jio-main/`](jio-main/) directory. All setup commands below run from there.

## About

This repository holds the Sitora Web agency site: services, portfolio, and contact experience for a studio crafting high-performance websites for ambitious businesses — business websites, WooCommerce stores, landing pages, redesigns, and ongoing maintenance.

## Features

- Immersive 3D hero and interactive scenes (React Three Fiber)
- Services overview: web development, e-commerce, digital marketing
- Portfolio / case-study showcase sections
- Smooth scroll animations and motion design
- Contact and inquiry flow
- AI-assisted interactive elements

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS 4, React Three Fiber, Drei, Motion, Lucide icons
- **Build:** Vite 6
- **Backend:** Express (bundled Node server), Google Gemini AI

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
cd jio-main
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build for production

```bash
cd jio-main
npm run build
```

## Project Structure

```
├── jio-main/
│   ├── src/            # Application source
│   ├── public/         # Static assets and images
│   ├── scripts/        # Build-time asset scripts
│   ├── index.html      # HTML entry point
│   └── package.json
└── README.md
```

## Links

- Website: https://sitora.org
- GitHub: https://github.com/sitoraweb6-oss

---

Built with care by [Sitora Web](https://sitora.org).
