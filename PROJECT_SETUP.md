# MKM Carrosserie - Project Setup

## Project Overview

Een moderne, professionele website voor MKM Carrosserie - een ervaren carrosseriebedrijf dat vakmanschap en kwaliteit levert.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## Project Structure

```
mkm-carrosserie/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── gallery/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/           # Shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── ContactForm.tsx
│   │   └── common/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── LoadingSpinner.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── types.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── gallery/
│   │   └── logos/
│   └── icons/
├── components.json
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Key Features

1. **Responsive Design**: Mobile-first approach
2. **Modern UI**: Clean, professional design
3. **Performance**: Optimized images and code splitting
4. **SEO**: Meta tags, structured data
5. **Accessibility**: WCAG 2.1 compliance
6. **Contact Forms**: Functional contact forms
7. **Gallery**: Image showcase for work
8. **Services**: Detailed service descriptions

## Pages Structure

- **Home**: Hero section, services overview, testimonials
- **About**: Company story, team, values
- **Services**: Detailed service offerings
- **Gallery**: Before/after photos, work showcase
- **Contact**: Contact form, location, hours

## Design Principles

- **Professional**: Clean, trustworthy appearance
- **Modern**: Contemporary design trends
- **Accessible**: Inclusive design practices
- **Fast**: Optimized performance
- **Mobile**: Responsive across all devices

## Development Guidelines

- TypeScript strict mode
- ESLint + Prettier configuration
- Component-based architecture
- Custom hooks for reusable logic
- Error boundaries for robustness
- Loading states and error handling

## Dependencies

### Core

- next: ^14.0.0
- react: ^18.0.0
- react-dom: ^18.0.0
- typescript: ^5.0.0

### Styling

- tailwindcss: ^3.4.0
- @tailwindcss/typography: ^0.5.0
- autoprefixer: ^10.4.0
- postcss: ^8.4.0

### UI Components

- @radix-ui/react-\* (via shadcn/ui)
- class-variance-authority: ^0.7.0
- clsx: ^2.0.0
- tailwind-merge: ^2.0.0

### Icons & Fonts

- lucide-react: ^0.294.0
- next/font: ^14.0.0

### Development

- @types/node: ^20.0.0
- @types/react: ^18.0.0
- @types/react-dom: ^18.0.0
- eslint: ^8.0.0
- eslint-config-next: ^14.0.0
- prettier: ^3.0.0

## Setup Commands

```bash
# Initialize Next.js project
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Install additional dependencies
npm install lucide-react class-variance-authority clsx tailwind-merge

# Initialize Shadcn/ui
npx shadcn-ui@latest init

# Add Shadcn/ui components
npx shadcn-ui@latest add button card input textarea form
```

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://mkmcarrosserie.be
NEXT_PUBLIC_CONTACT_EMAIL=info@mkmcarrosserie.be
NEXT_PUBLIC_PHONE=+31-xxx-xxx-xxx
```

## Content Strategy

- **Hero**: "Met ervaren vakmanschap bouwen en herstellen we met vertrouwen"
- **Services**: Carrosseriewerken, schadeherstel, lakwerk, etc.
- **About**: Ervaring, team, kwaliteit, vertrouwen
- **Testimonials**: Klantbeoordelingen
- **Contact**: Locatie, openingstijden, contactgegevens

## Performance Targets

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## Next Steps

1. Initialize Next.js project
2. Setup Tailwind CSS configuration
3. Install and configure Shadcn/ui
4. Create basic layout components
5. Implement homepage sections
6. Add additional pages
7. Optimize images and performance
8. Deploy to Vercel

---

_Deze setup volgt moderne web development best practices en zorgt voor een schaalbare, onderhoudbare codebase._
