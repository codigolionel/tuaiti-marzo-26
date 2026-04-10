# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tuaiti corporate website — a single-page site built with React + TypeScript + Vite. It includes a PHP backend for the contact form email service.

## Commands

### Frontend
```bash
npm install          # install dependencies
npm run dev          # dev server on http://localhost:8080
npm run build        # production build
npm run lint         # ESLint
npm run test         # vitest (single run)
npm run test:watch   # vitest (watch mode)
```

### Backend (`backend/api/`)
Single PHP file, no build step. Requires `config.php` with SMTP and Turnstile credentials (not in repo, see below).

## Architecture

### Frontend (`src/`)
- **Single-page app**: React Router with one route (`/`) rendering `pages/Index.tsx`, plus a `NotFound` catch-all
- **Page structure**: `Index.tsx` composes the page from section components in order: Navbar → HeroSlider → AboutSection → ServicesSection → ComoTrabajamos → ContactSection → CtaBannerSection → Footer
- **UI components**: shadcn/ui (Radix primitives) in `src/components/ui/`, custom section components in `src/components/`
- **Path alias**: `@/` maps to `src/`
- **Styling**: Tailwind CSS with CSS custom properties for theming (defined in `src/index.css`). Key brand colors: primary (institutional blue `#1F3A5F`), CTA orange (`#E47223`), secondary slate
- **Font**: Inter
- **Animations**: Framer Motion, plus custom Tailwind keyframes (`fade-up`)
- **State/data**: TanStack React Query, react-hook-form + zod for forms
- **Carousel**: Swiper (HeroSlider), Embla (ui components)
- **Tests**: Vitest + Testing Library + jsdom. Test files go in `src/**/*.{test,spec}.{ts,tsx}`, setup in `src/test/setup.ts`

### Backend (`backend/api/`)
- Single PHP endpoint: `POST /api/contact.php`
- Validates form fields (name, contact, message), verifies Cloudflare Turnstile, sends email via SMTP
- Rate limiting (5 requests/15min per IP), HTML escaping, header injection protection
- CORS configured in `config.php`
- `config.php` holds credentials (gitignored) — create manually on server
- `.htaccess` blocks direct access to `config.php`

### Deployment
- **Server**: Virtualmin shared hosting
- **SSH**: `ssh tuaiti@admin.tuaiti.com.ar -p 5447`
- **Frontend**: build with `npm run build`, upload `dist/` contents to document root
- **Backend**: upload `backend/api/` to server's `/api/` directory, create `config.php` with credentials

## Key Config
- **TypeScript**: `strictNullChecks` and `noImplicitAny` are off
- **ESLint**: `@typescript-eslint/no-unused-vars` is off
- **Vite**: Uses `@vitejs/plugin-react-swc` for fast refresh
