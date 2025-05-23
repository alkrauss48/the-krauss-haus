# Use the official nginx alpine image as base
FROM nginx:alpine

# Copy all static assets first
COPY . /usr/share/nginx/html/

# Copy custom nginx configuration last
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

