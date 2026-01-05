# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Sellish marketing website - a Next.js 15 landing page for the Sellish mobile app. The site features email capture (via Formspree or local fallback) and provides information about the app's features.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.1.6 with App Router
- **React**: 19.0.0
- **TypeScript**: 5.9.3
- **Styling**: CSS-in-JS using globals.css with CSS variables
- **Form handling**: Formspree integration with localStorage fallback

### Directory Structure
```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Homepage (marketing content)
├── signup-form.tsx     # Client component for email capture
├── globals.css         # Global styles and design tokens
├── thanks/page.tsx     # Thank you page after signup
├── privacy/page.tsx    # Privacy policy
└── terms/page.tsx      # Terms of service
```

### Key Components

**signup-form.tsx** - Client-side form with dual modes:
- Primary: Formspree API integration for production email collection
- Fallback: localStorage-based email storage for zero-config launches
- Uses `"use client"` directive and Next.js router for navigation

**page.tsx** - Server component containing:
- Hero section with app description
- Feature cards (3-column grid, responsive)
- Email signup panel embedded in hero
- Footer with legal links

### Environment Variables

Required/recommended variables (set in Vercel or `.env.local`):
```
NEXT_PUBLIC_APP_STORE_URL      # Required: iOS App Store link
NEXT_PUBLIC_PLAY_STORE_URL     # Optional: Android Play Store link
NEXT_PUBLIC_FORMSPREE_ID       # Recommended: Formspree form ID for email capture
```

Without `NEXT_PUBLIC_FORMSPREE_ID`, the form runs in "placeholder mode" storing emails in browser localStorage only.

### Design System

The site uses a dark theme with:
- CSS custom properties defined in `:root` (globals.css:1-10)
- Gradient background with multiple radial gradients
- Glassmorphism panels (semi-transparent backgrounds with borders)
- Two accent colors: cyan (#61DAFB) and purple (#9650FF)
- Mobile-responsive breakpoint at 860px

### TypeScript Configuration

- Strict mode enabled
- Target: ES2022
- Module resolution: "bundler"
- No JavaScript files allowed (`allowJs: false`)

## Deployment

Designed for Vercel deployment:
1. Import repository in Vercel
2. Set environment variables in Project Settings
3. Deploy (automatic on push to main)
