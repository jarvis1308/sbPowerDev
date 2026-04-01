# CLAUDE.md — sbPowerDev Project Intelligence

## Project Overview
sbPowerDev is a B2B IT services & consulting company website built with Next.js 14 (App Router). 
This is a revamped, premium corporate site with an **admin panel** for live theme customization, 
**light/dark mode toggle**, interactive features (ROI calculator, solution explorer, AI chatbot), 
and a modern design system.

## Tech Stack
- **Framework**: Next.js 14+ (App Router, `app/` directory)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.4+ with CSS custom properties for dynamic theming
- **UI Components**: shadcn/ui (New York style)
- **Animation**: Framer Motion 11+
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **State**: Zustand (theme store, admin state)
- **Charts**: Recharts
- **Command Palette**: cmdk
- **Font**: Inter (next/font/google)

## Architecture Decisions

### Theming System (CRITICAL)
- ALL colors are CSS custom properties defined in `globals.css` and toggled via `data-theme` attribute on `<html>`
- The admin panel writes to a Zustand store → persisted in localStorage → applied as inline CSS variables on `<html>`
- Light/dark mode is a SEPARATE concern from brand colors
- **Never hardcode colors in components.**
- Tailwind config extends colors to reference CSS variables: `primary: 'hsl(var(--primary))'`

### Component Patterns
- All components are React Server Components by default
- Add `'use client'` ONLY when needed
- Shared components go in `components/ui/` (shadcn) or `components/shared/`

### Import Aliases
- `@/*` maps to project root

## Key Commands
```bash
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build
npm run lint         # ESLint
npm run type-check   # TypeScript compiler check
```

## Critical Rules
1. **NEVER hardcode colors** — always CSS variables via Tailwind
2. **NEVER use `useEffect` for theme** — use ThemeScript (blocking script) to prevent flash
3. **ALL text content** comes from `data/` files
4. **Mobile-first** Tailwind classes
5. **Every page** gets `generateMetadata()`
6. **Images** — always use `next/image` with explicit width/height/alt
