# Canis (Next.js Migration Scaffold)

This project has been migrated to a **Next.js (App Router) + Tailwind CSS** foundation so the full redesign can happen incrementally.

## Migration outcome

- Added a reusable Next.js layout shell with shared navigation and footer.
- Converted legacy PHP page paths to Next.js routes.
- Migrated key content from `index.php`, `AboutUs.php`, and `Careers.php` into React pages.
- Added placeholders for legacy pages that were mostly boilerplate, preserving route structure.
- Kept all legacy PHP files/assets in place for reference.

## Route mapping (PHP -> Next.js)

- `index.php` -> `/`
- `AboutUs.php` -> `/about-us`
- `Careers.php` -> `/careers`
- `ContactUs.php` -> `/contact-us`
- `Blog.php` -> `/blog`
- `Collaboration.php` -> `/collaboration`
- `Indenting.php` -> `/indenting`
- `OurProducts.php` -> `/our-products`
- `Portfoliio.php` -> `/portfolio`
- `ResearchAndDevelopment.php` -> `/research-and-development`
- `Services.php` -> `/services`
- `TrainingForInternationalCertificates.php` -> `/training-for-international-certificates`
- `Trainings.php` -> `/trainings`
- `simple.php` -> `/simple`

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build check

```bash
npm run build
npm start
```

## Next redesign phase

1. Replace placeholder routes with finalized section-level designs.
2. Run `npx shadcn@latest init` and start introducing reusable UI components.
3. Migrate legacy JS-driven behavior (carousels, collapses, forms) into typed React components and Next API routes.
