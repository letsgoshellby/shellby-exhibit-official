# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the development server with TurboPack at http://localhost:3000
- `npm run build` - Build the application for production with TurboPack
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is a Next.js 15 application using the App Router pattern with TailwindCSS v4 for styling.

### Project Structure
- `src/app/` - Next.js App Router directory containing pages and layouts
  - `layout.js` - Root layout with Geist font configuration
  - `page.js` - Home page component
  - `globals.css` - Global styles and Tailwind imports
  - `shellby-test/` - Additional route (currently empty page.js)

### Key Technologies
- **Next.js 15.5.2** with App Router and TurboPack
- **React 19.1.0** 
- **TailwindCSS v4** with PostCSS configuration
- **ESLint 9** with Next.js core-web-vitals rules

### Configuration Files
- `next.config.mjs` - Next.js configuration (currently using defaults)
- `eslint.config.mjs` - ESLint flat config extending Next.js core-web-vitals
- `jsconfig.json` - Path aliases (`@/*` maps to `./src/*`)
- `postcss.config.mjs` - TailwindCSS PostCSS plugin configuration

### Styling Approach
- TailwindCSS utility classes
- Geist fonts (Sans and Mono) from Google Fonts
- Dark mode support via Tailwind's dark: variant classes