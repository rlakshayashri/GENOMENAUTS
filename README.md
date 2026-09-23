# GENOMENAUTS — SRMIST Department of Biotechnology

Official web platform for **Genomenauts**, the student-led Biotechnology, Bioinformatics, and Computational Biology organization at **SRMIST Ramapuram Campus, Chennai**.

The platform showcases the department's vision, faculty coordinators, student executive leadership, domain pods (Bio Research, Design, Content, PR, Motion Media, Management), interactive thought experiment research scenarios, a member profile lightbox system, and an interactive recruitment and bioinformatics data submission portal.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.react.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & HTML5 2D Canvas Physics

---

## 📁 Project Structure

```
GENOMENAUTS/
├── public/
│   ├── logo.png                # Official circular crest logo & favicon
│   └── [member photos...]      # High-resolution crew & leadership photos
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky navigation header + WhatsApp CTA
│   │   ├── MolecularBackground.tsx # HTML5 canvas with 3D DNA double helix & particles
│   │   ├── HeroSection.tsx      # Landing hero & primary CTA buttons
│   │   ├── DepartmentSection.tsx# Department overview, Vision & Activity Pulse
│   │   ├── CommandDeck.tsx      # Multi-speed orbit deck visualizer
│   │   ├── LeadershipSection.tsx# HOD, Faculty, & Student Presidents cards
│   │   ├── DomainPodsSection.tsx# 15 domain leads with search bar & filters
│   │   ├── HypotheticalSection.tsx # Research lab thought experiments & proposal modal
│   │   ├── ContactSection.tsx   # Recruitment Interest & Bioinfo Data Vault forms
│   │   ├── MemberModal.tsx      # Detailed bio & photo enlargement lightbox modal
│   │   └── Footer.tsx           # Sitemap & campus location details
│   ├── data/
│   │   ├── teamData.ts          # Central dataset for leadership & domain pod members
│   │   └── hypotheticalsData.ts # Thought experiment scenario dataset
│   ├── types.ts                 # TypeScript interfaces
│   ├── App.tsx                  # Application entry component & state container
│   ├── main.tsx                 # React DOM root render
│   └── index.css                # Tailwind directives & custom neon glow tokens
├── vercel.json                  # Vercel SPA routing rewrites configuration
├── package.json
└── tsconfig.json
```

---

## 🛠️ Local Setup & Development

### 1. Prerequisites
- Node.js (v18.x or higher)
- npm / pnpm / yarn

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/genomenauts.git

# Navigate into the project directory
cd genomenauts

# Install dependencies
npm install
```

### 3. Running Development Server

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Building for Production

```bash
npm run build
```
This runs TypeScript checking (`tsc -b`) and generates optimized production assets in the `dist/` directory.

### 5. Previewing Production Build

```bash
npm run preview
```

---

## 🌐 Vercel Deployment Guide

This project is fully configured as a zero-config Vite Single Page Application (SPA) for Vercel.

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Push your repository to **GitHub**.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `genomenauts` GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"**.

### Option B: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## 📄 License

Developed for the Department of Biotechnology, SRMIST Ramapuram Campus.
