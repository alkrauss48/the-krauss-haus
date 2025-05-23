# Use the official nginx alpine image as base
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copy static assets
COPY index.html /usr/share/nginx/html/
COPY app.css /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# The official nginx image already handles user permissions and entrypoint
CMD ["nginx", "-g", "daemon off;"] 
