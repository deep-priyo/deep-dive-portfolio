
# 🚀 Deep Dive Portfolio
A modern, fully interactive 3D developer portfolio built with React, Three.js (via React Three Fiber), and Tailwind CSS — optimized for performance, responsiveness, and delightful micro‑interactions.

---

## 🌟 Overview
This project showcases a polished, recruiter‑friendly developer portfolio featuring a cinematic 3D hero scene, interactive achievements, smooth animations, and a production‑ready UI system. It demonstrates hands‑on expertise across modern frontend tooling, 3D on the web, performance engineering, and design systems.

Live Demo: https://deep-dive-portfolio.vercel.app/

---

## ✨ Key Features
- 🌍 3D hero section with custom scene, lighting, and camera controls
- 🛰 Interactive Achievements panel with a 3D Rocket that responds to hover state
- 🧭 Smooth navigation and micro‑interactions (GSAP, R3F helpers)
- 📱 Fully responsive design with adaptive 3D scaling for mobile, tablet, desktop
- 💬 Contact form powered by EmailJS (client‑only)
- ⚡️ Fast dev/build pipeline via Vite, with React Suspense and lazy loading for assets
- 🎨 Tailwind‑based design system (custom colors, fonts, and utilities)

---

## 🛠 Tech Stack
- Frontend: React 18, Vite, React Router (section‑based), JSX/ESM
- 3D & Graphics: Three.js, @react-three/fiber, @react-three/drei, react-globe.gl, maath
- Animation & Controls: GSAP, drei’s OrbitControls, custom camera rig (HeroCamera)
- Styling: Tailwind CSS, PostCSS, Autoprefixer
- Utilities: react-responsive (media queries), Suspense/lazy for asset loading
- Tooling & DX: ESLint (React + R3F plugin), @vitejs/plugin-react

---

## 🧠 Architecture / How It Works
- App composition: `src/App.jsx` orchestrates top‑level sections — `Navbar`, `Hero`, `About`, `Projects`, `Experience`, `Achievement`, `Contact`, `Footer`.
- 3D Hero: `sections/Hero.jsx` mounts a `<Canvas>` (R3F) with `PerspectiveCamera`, a custom `HeroCamera` rig, ambient/directional lighting, and a scene that includes `HackerRoom`, `ReactLogo`, `Cube`, and `Rings`. Rendering is wrapped in `Suspense` with a `CanvasLoader` fallback.
- Responsive 3D: Screen breakpoints are detected via `react-responsive` and fed into `calculateSizes` (from `src/constants`) to adapt object scale/position.
- Achievements: `sections/Achievement.jsx` renders a two‑column layout: a list of achievement cards and a 3D `Rocket` in a canvas with `OrbitControls`. Hovering over list items updates `hoveredId`, which drives the Rocket’s state/animation.
- Contact: EmailJS powers client‑side email delivery with public keys configured via Vite environment variables.

---

## 📂 Project Structure
```bash
F:./deep-dive-portfolio
├─ public/                 # Static assets
├─ src/
│  ├─ components/          # 3D + UI components (HackerRoom, HeroCamera, ReactLogo, Cube, Rings, Rocket, CanvasLoader, Button, etc.)
│  ├─ sections/            # Page sections (Navbar, Hero, About, Projects, Experience, Achievement, Contact, Footer)
│  ├─ constants/           # Config, helpers (e.g., calculateSizes, content data)
│  ├─ assets/              # Images, icons, textures
│  ├─ App.jsx              # App composition (sections layout)
│  └─ main entry files     # Vite/React bootstrap
├─ index.html              # Vite HTML template
├─ package.json            # Scripts & dependencies
├─ tailwind.config.js      # Design tokens & theme extensions
├─ postcss.config.js       # PostCSS/Autoprefixer
├─ vite.config.js          # Vite + React plugin config
└─ README.md               # You are here
```

---

## ⚙️ Installation & Setup
Prerequisites: Node.js 18+ and npm

1) Clone the repo
```bash
git clone https://github.com/deep-priyo/deep-dive-portfolio.git
cd deep-dive-portfolio
```

2) Install dependencies
```bash
npm install
```

3) Run in development
```bash
npm run dev
```
Visit http://localhost:5173 (or as shown in your terminal) to view the app.

4) Build for production
```bash
npm run build
```

5) Preview production build
```bash
npm run preview
```

---

## 🚀 Usage
- Navigate between sections using the navbar.
- Explore the 3D hero scene; the camera and lighting create depth and motion.
- Hover over achievements to see the 3D Rocket respond in real time.
- Use the Contact section to send a message via EmailJS.

---

## 🔧 Configuration
EmailJS (client‑only) requires Vite environment variables. Create a `.env` file in the project root and configure the following (example names):
```bash
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```
Usage typically looks like:
```js
import emailjs from '@emailjs/browser';
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```
Note: Only variables prefixed with `VITE_` are exposed to the client.

---

## 📈 What Makes This Project Unique
- Production‑minded 3D: Balanced lighting, camera rigs, asset loading states, and responsive scaling for real‑world performance.
- Clean section architecture: Clear separation of concerns between UI sections and 3D components.
- Design system: Tailwind theme with custom palettes and typography for consistent visuals.
- Modern DX: Vite + React 18 + ESLint with R3F plugin for smoother development and safer 3D patterns.

---

## 🧩 Future Improvements
- Add project filters and deep‑linking for the Projects section
- Expand 3D interactions (scroll‑based parallax, camera paths)
- Accessibility pass for canvas overlays and keyboard navigation
- Add unit tests for helpers and section behaviors
- Optional serverless backend for contact form analytics/storage

---

## 👨‍💻 Author / Contact
- Email: priyadeepmullick@gmail.com
- Portfolio: https://deep-dive-portfolio.vercel.app/
- LinkedIn: https://linkedin.com/in/prdm
- GitHub: https://github.com/deep-priyo

If this project helped or inspired you, consider starring the repo! ⭐
