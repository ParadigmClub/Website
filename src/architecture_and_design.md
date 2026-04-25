# Architecture and Design Analysis

## Web Architecture
The application is built using a modern React stack:
- **Framework**: React 18 with Vite as the build tool.
- **Routing**: React Router DOM (`react-router-dom`) for client-side routing.
- **Language**: TypeScript for type safety (`typescript`).
- **Styling**: Tailwind CSS for utility-first styling, integrated with `postcss` and `autoprefixer`.
- **UI Components**: `shadcn-ui` is used (implied by `components.json`, `class-variance-authority`, `clsx`, `tailwind-merge`).
- **Animations & Scrolling**: `framer-motion` for animations and `@studio-freight/lenis` / `@studio-freight/react-lenis` for smooth scrolling.
- **Linting**: ESLint with React and TypeScript plugins.

## Design Style
- **Typography**: The primary heading font is "Plus Jakarta Sans" (used for `h1` through `h5` tags, with bold weights).
- **Theme**: 
  - Supports both light and dark modes via Tailwind's `class` strategy.
  - Complex color palette managed via CSS variables in `@layer base`, leveraging HSL color values for variables like `--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, etc.
- **Micro-interactions & UX**:
  - Custom scrollbar implementations (styled with a dark track and cyan thumb, which turns darker cyan on hover).
  - Smooth scrolling behavior set globally (`scroll-behavior: smooth`).
  - `.fade` animations for revealing elements smoothly (`opacity: 0` to `opacity: 1`, transforming `translateY`).
  - `.achievements-container` scrolling animation with a 20s linear infinite loop.
