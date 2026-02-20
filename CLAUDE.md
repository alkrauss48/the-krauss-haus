# The Krauss Haus

A cocktail menu website for The Krauss Haus, a home bar. Live at [thekrausshaus.com](https://thekrausshaus.com).

**Tech stack:** SvelteKit 2, Svelte 5, TypeScript, Tailwind CSS 4, Vite 6

## Common Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build
- `npm run test` — Run all tests (single run)
- `npm run test:unit` — Run tests in watch mode
- `npm run lint` — ESLint + Prettier check
- `npm run format` — Auto-format with Prettier
- `npm run check` — Svelte type checking

## Project Structure

```
src/
  routes/              # SvelteKit file-based routing
    cocktails/         # /cocktails and /cocktails/[slug]
    recipes/           # /recipes and /recipes/[slug]
    ingredients/       # /ingredients
    paths/             # /paths and /paths/[slug]
    parties/           # /parties and /parties/[slug]
    tiki-menu/         # Themed menu pages
    summer-menu/
    winter-menu/
  lib/
    components/        # Reusable Svelte components
    data/
      cocktails/       # Individual cocktail TS files (one per cocktail)
      all-cocktails.ts # Master list importing all cocktails
      all-ingredients.ts
      all-tags.ts
      tiki-menu.ts     # Themed menu data files
      summer-menu.ts
      winter-menu.ts
    types/             # TypeScript type definitions
    enums/             # Enums (methods, ingredientType, served-in, ice)
    utils/             # Utility functions (filterLogic, ingredients)
static/                # Static assets
```

## Architecture & Patterns

- **File-based routing** via SvelteKit
- **Static TypeScript data** — No CMS or database. All cocktail data lives as TS objects in `src/lib/data/cocktails/`
- **Svelte 5 runes** — Uses `$props()`, `$state()`, etc.
- **Tailwind-only styling** — No CSS modules or scoped styles
- **Montserrat font**
- **Images hosted on DigitalOcean CDN** at `personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/`

## Data Model

Key types in `src/lib/types/`:

- **Cocktail** (`cocktails.ts`) — Title, slug, description, image paths, method, ingredients, tags, notes
- **Ingredient** (`ingredients.ts`) — Ingredient definitions with type categorization
- **Tag** (`tags.ts`) — Categorized tags (base alcohol, flavor profile, technique, style, origin, etc.)
- **Recipe** (`recipes.ts`) — Recipe data
- **CocktailPath** (`cocktail-path.ts`) — Guided cocktail discovery paths
- **Party** (`party.ts`) — Party/event data

Enums in `src/lib/enums/`: `CocktailMethod`, `IngredientType`, `ServedIn`, `Ice`

## Adding a New Cocktail

1. Create a new file in `src/lib/data/cocktails/` (e.g., `my-drink.ts`). Follow the pattern in existing files — export a `Cocktail` object as the default export with title, slug, description, image paths, method, servedIn, ice, ingredients, tags, and notes.
2. Import and add it to the `allCocktails` array in `src/lib/data/all-cocktails.ts` (alphabetical order).
3. Optionally add it to a menu file (`tiki-menu.ts`, `summer-menu.ts`, `winter-menu.ts`) if it belongs on a themed menu.

## Testing

Uses **Vitest** with two workspaces configured in `vite.config.ts`:

- **client** — `jsdom` environment, for Svelte component tests (`*.svelte.test.ts`), uses `@testing-library/svelte`
- **server** — `node` environment, for non-component tests (`*.test.ts`)

Run: `npm run test`

## Code Style

- **Tabs** for indentation
- **Single quotes**
- **100-char** print width
- **No trailing commas**
- Prettier + ESLint configured (see `.prettierrc`, `eslint.config.js`)
- **Conventional commits**: `feat(scope):`, `fix(scope):`, `refactor(scope):`, `docs(scope):`, etc.
