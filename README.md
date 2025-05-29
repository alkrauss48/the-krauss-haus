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

## License

MIT
