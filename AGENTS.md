# AGENTS.md

Quick reference for Codex and human contributors. This file complements `CLAUDE.md` with a concise, task-focused view of standards, stack decisions, and common workflows.

## Tech Stack Decisions

- SvelteKit 2 + Svelte 5 (runes)
- TypeScript
- Vite 6
- Tailwind CSS 4 (utility-first; no CSS modules/scoped styles)
- Vitest (client + server workspaces)
- Nginx on Alpine Linux for Docker deploys
- Montserrat font (Google Fonts)

## Code Standards

- Tabs for indentation
- Single quotes
- 100-character print width
- No trailing commas
- Tailwind-only styling; keep layout in components, avoid custom CSS unless necessary
- Prefer explicit, static data over dynamic sources (site is intentionally static)
- Conventional commits: `feat(scope):`, `fix(scope):`, `refactor(scope):`, `docs(scope):`, etc.

Formatting/linting: `npm run lint`, `npm run format`

## Project Layout

```
src/
  routes/              # SvelteKit file-based routing
  lib/
    components/        # Reusable Svelte components
    data/              # Static data files (cocktails, menus, ingredients, tags)
    enums/             # Enums (method, ingredientType, served-in, ice)
    types/             # TypeScript types
    utils/             # Utilities (filter logic, ingredients)
static/                # Static assets
```

## Common Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run test` — all tests (single run)
- `npm run test:unit` — watch mode
- `npm run lint` — ESLint + Prettier check
- `npm run format` — Prettier format
- `npm run check` — Svelte type checking

## Data Model Pointers

Key types in `src/lib/types/`: `cocktails.ts`, `ingredients.ts`, `tags.ts`, `recipes.ts`, `cocktail-path.ts`, `party.ts`

## Adding a Cocktail (Canonical Flow)

1. Add a new file in `src/lib/data/cocktails/` exporting a `Cocktail` object.
2. Import and add it to `src/lib/data/all-cocktails.ts` (alphabetical order).
3. Optionally add to a themed menu: `tiki-menu.ts`, `summer-menu.ts`, `winter-menu.ts`.

## Assets + Images

- Cocktail images are hosted on the DigitalOcean CDN:
  `personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/`
- Image generation guidance lives in `README.md`.

## Notes

- Prefer small, targeted edits.
- Keep Svelte 5 runes style consistent with existing components.
- For deeper details, see `CLAUDE.md` and `README.md`.
