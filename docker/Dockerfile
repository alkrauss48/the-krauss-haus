# Use the official nginx alpine image as base
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Create nginx user if it doesn't exist
RUN adduser -D -H -u 101 -s /sbin/nologin nginx || true

# Copy custom nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copy static assets
COPY index.html /usr/share/nginx/html/
COPY app.css /usr/share/nginx/html/

# Set proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid && \
    chmod -R 755 /var/run/nginx.pid

# Expose port 80
EXPOSE 80

# Switch to non-root user
USER nginx

# Start nginx with the official entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"] 
