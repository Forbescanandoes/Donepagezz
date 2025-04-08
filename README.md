# README for DonePagez Landing Page Skeleton

This repository contains the foundational codebase for the DonePagez landing page system. It utilizes Next.js (App Router), TypeScript, TailwindCSS, and shadcn/ui components.

## Purpose

This skeleton provides a pre-configured starting point for building high-converting, AI-optimized landing pages following the DonePagez methodology. The core idea is to leverage a systematic, MD-driven approach combined with AI development tools (like Cursor) to ship pages quickly.

## Key Features

- **Next.js App Router:** Modern React framework features.
- **TypeScript:** Strong typing for robust code.
- **TailwindCSS:** Utility-first CSS framework for rapid styling.
- **shadcn/ui:** Pre-built, accessible, and customizable React components.
- **Centralized Content:** All text managed via `app/config/site.config.ts`.
- **Centralized Links:** All links/paths managed via `app/config/links.config.ts`.
- **Modular Sections:** Page structure built from components in `app/components/sections/`.
- **MD-Driven Workflow:** Designed to work with the DonePagez markdown file system (provided separately).

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Workflow

Follow the sequence outlined in the project's root `.md` files, starting with `# 🚀 boot-sequence.md`.

1.  Define layout in `app/page.tsx` based on `# 🧱 layout-design.md`.
2.  Update text content in `app/config/site.config.ts` based on `# ✍️ copywriting-guide.md`.
3.  Update links in `app/config/links.config.ts` as needed.
4.  Style components in `app/components/sections/` using TailwindCSS and shadcn/ui, guided by `# 🎨 ui-styling.md`.
5.  Implement animations using `lib/animations.ts` guided by `# 🎞️ framer-guide.md`.

## Layout Plan:

Chosen Layout Type: **Comparison Matrix Page** (from `# 🧱 layout-design.md`), modified for CRO flow.

**Section Order & Logic:**

1.  **Hero:** State core value prop (Landing Page OS for AI Founders), immediate CTA.
2.  **Social Proof / Differentiator:** Combine early trust (stats/logos) with the core problem/differentiation message (e.g., "The Anti-Webflow Revolution"). Establish credibility and frame the need.
3.  **Features:** Detail the _outcomes_ of the core features (MD System, AI Integration, Export) focusing on speed, control, and systemization.
4.  **Comparison Table:** Explicitly compare DonePagez vs. alternatives (Webflow/Framer) on key founder concerns (Speed, Cost, Lock-in, AI Workflow, Ownership).
5.  **Pricing:** Clearly present the simple, one-time pricing plans, anchoring value.
6.  **CTA:** Main call to action section, reinforcing the primary offer.
7.  **FAQ:** Address final hesitations and common questions (Client work, AI expertise, etc.).
8.  **Footer:** Standard navigation and legal links.

# Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# landing-page-structure

> > > > > > > e31d7aa0f4c38d8bf4d01d6ce5d1cb2343ad2379
