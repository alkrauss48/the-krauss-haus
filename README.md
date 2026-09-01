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

```
Create a portrait-oriented, highly painterly watercolor illustration of a cocktail based on the reference data provided below. Infer the drink’s appearance from its name, ingredients, serving style, glassware, ice, garnish, and overall character. Interpret the data visually and flexibly rather than relying on specific field names.

The finished illustration should feel like a traditional hand-painted watercolor, not a polished digital rendering or photorealistic drink illustration.

## Composition

- Portrait orientation.
- Transparent background (PNG).
- The cocktail should fill nearly the entire frame with minimal padding.
- Keep the entire drink fully visible, including the full glass, ice, liquid, garnish, straw, umbrella, or other accessories.
- Do not crop any part of the drink.
- Centered, simple, iconic composition suitable for a standalone cocktail-menu illustration.
- Preserve the recognizable overall shape of the glass and garnish, but allow small details to dissolve naturally into the watercolor.

## Watercolor Style

- Use a loose, expressive, slightly abstract watercolor style.
- Favor broad translucent washes, pigment blooms, soft bleeding edges, uneven saturation, granulation, and overlapping pools of color.
- Shapes should feel suggested rather than precisely rendered.
- Avoid crisp outlines, sharp digital edges, highly defined reflections, photorealistic textures, or individually rendered pieces of ice.
- Glass edges should be understated and partially implied with pale blue-gray or desaturated washes rather than sharply drawn.
- Ice should appear as soft, irregular patches and loose angular washes, with some forms blending into one another.
- Liquid should have blended gradients and organic variations in pigment rather than a uniformly rendered surface.
- Garnishes should remain recognizable but painterly, with leaves, fruit, and other details formed from loose brush shapes rather than fine linework.
- Allow colors from neighboring elements to subtly bleed into one another.
- Include visible watercolor-paper-like texture within the painted areas.
- Leave occasional unpainted or nearly white areas to create highlights through negative space.
- The image should feel somewhat dreamy, imperfect, handmade, and illustrative, rather than clean, precise, or realistic.

## Color and Atmosphere

- Use a palette inspired by the drink’s natural ingredients and flavor character.
- Prefer luminous, transparent watercolor color over heavy opaque rendering.
- Use gentle shifts in hue and saturation to create depth rather than hard shading.
- A soft, abstract watercolor bloom or halo may sit behind the cocktail using colors drawn from the drink.
- Any halo or splash should have irregular wet-on-wet edges, blooms, drips, and scattered pigment marks.
- Keep this decorative wash contained around the cocktail so the surrounding canvas remains transparent.
- Do not create a solid, gradient, dark, or photographic background.

## Important Style Priority

When choosing between realism and watercolor abstraction, always favor watercolor abstraction.

The illustration should resemble a loose cocktail painting made with wet brushes on textured paper, where edges merge, pigments bleed, and details are simplified.

## Output

Output only the finished image as a transparent PNG.

No text, labels, borders, mockups, or explanation.
```

And then paste the cocktail details, such as the cocktail JSON file.

Example of "Path" images:

```
Create an artistic painting of a "<class>", with the context as a class from a role-playing game or adventure. The character should have <any necessary items> and appear as "<personality>". Use loose brushstrokes and an expressive watercolor style with color tones. The character should appear in the form of their most iconic stance, and should be the only (or at least the only major) thing pictured. The illustration should have a hand-painted artistic interpretation with clear edges and a contained design. Portrait orientation (taller than wide).
```

## License

MIT
