# The Krauss Haus

This repo is live at https://thekrausshaus.com. A digital hub for guests visiting the Krauss Haus, currently featuring our curated bar menus. This site serves as a central resource for visitors to access our seasonal cocktail offerings and will expand to include additional guest resources in the future.

## Features

- **Seasonal Menus**: Access to our Summer, Tiki, and Winter cocktail menus
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, minimalist design with playful interactive elements
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## Technology Stack

- **Frontend**: SvelteKit, TailwindCSS
- **Font**: Montserrat (Google Fonts)
- **Hosting**: Nginx on Alpine Linux (Docker)
- **Design**: TailwindCSS with custom animations

## Development

The site is built with SvelteKit and TailwindCSS, focusing on simplicity and performance. The design features:

- Rainbow gradient animations
- Responsive layout
- Interactive hover effects
- Mobile-first approach

### Getting Started

First, install dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

This will start the development server at `http://localhost:5173`. The page will automatically reload when you make changes to the code.

## Building

To create a production version of the app:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

You can preview the production build with:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Deployment

### Docker Deployment

Build and run the container:

```bash
# Build the Docker image
docker build -t krauss-haus -f docker/Dockerfile .

# Run the container
docker run -p 8080:80 krauss-haus
```

The site will be available at `http://localhost:8080`

## Image Generation

Images have been generated with ChatGPT. All cocktail images typically follow the following prompt template:

> Create an artistic painting of a `name` cocktail in a `type of glass` with `type of ice`, `and any garnishes or other visual details`. Use loose brushstrokes and an expressive watercolor style with `color` tones. Make this a completely transparent PNG with no background at all, although minor abstract background directly behind the cocktail is okay as long as it highlights the cocktail itself. The illustration should have a hand-painted artistic interpretation with clear edges and a contained design. Portrait orientation (taller than wide).

An example prompt is:

```
Create a portrait-oriented watercolor illustration of a cocktail based on the following reference data. Infer the drink’s visual appearance from the information provided (name, ingredients, serving style, glassware, ice, garnish, and overall character). Interpret the data flexibly rather than relying on specific field names.

Image Requirements
*	Portrait orientation.
*	Transparent background (PNG).
*	The cocktail should fill nearly the entire frame with minimal padding.
*	Entire drink must be fully visible: glass, ice, liquid, garnish, and any accessories (no cropping).
*	Clean, centered, iconic composition suitable for a standalone menu illustration.
*	Loose, hand-painted watercolor style with visible brushwork.
*	Soft, natural edges with gentle color variation and watercolor texture.
*	Color palette should reflect the drink’s natural appearance and flavor character.
*	Optional: a subtle, contained watercolor halo or splash behind the drink for emphasis only (must remain contained and not fill the background).

Output only the finished image (transparent PNG). No text or explanation.
```

And then paste the cocktail details, such as the cocktail JSON file.

Example of "Path" images:

```
Create an artistic painting of a "<class>", with the context as a class from a role-playing game or adventure. The character should have <any necessary items> and appear as "<personality>". Use loose brushstrokes and an expressive watercolor style with color tones. The character should appear in the form of their most iconic stance, and should be the only (or at least the only major) thing pictured. The illustration should have a hand-painted artistic interpretation with clear edges and a contained design. Portrait orientation (taller than wide).
```

## License

MIT
