# The Krauss Haus

This repo is live at https://thekrausshaus.com. A digital hub for guests visiting the Krauss Haus, currently featuring our curated bar menus. This site serves as a central resource for visitors to access our seasonal cocktail offerings and will expand to include additional guest resources in the future.

## Features

- **Seasonal Menus**: Access to our Summer, Tiki, and Winter cocktail menus
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, minimalist design with playful interactive elements
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## Technology Stack

- **Frontend**: HTML5, CSS3
- **Font**: Montserrat (Google Fonts)
- **Hosting**: Nginx on Alpine Linux (Docker)
- **Design**: Custom CSS with modern gradients and animations

## Development

The site is built with vanilla HTML and CSS, focusing on simplicity and performance. The design features:
- Rainbow gradient animations
- Responsive layout
- Interactive hover effects
- Mobile-first approach

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

### Local Development

There are several ways to run the site locally:

1. **Direct File Opening**: Simply open `index.html` in a web browser. No build process is required.

2. **Python Web Server**: Use the included Makefile command to start a local development server:
   ```bash
   make serve
   ```
   This will start Python3's built-in HTTP server on port 8000. The site will be available at `http://localhost:8000`

## License

MIT
