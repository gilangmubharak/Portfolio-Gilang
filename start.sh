#!/bin/sh
# Fix cache directory
mkdir -p /tmp/nginx_cache
chmod -R 777 /tmp/nginx_cache

# Replace the cache directory
rm -rf /var/cache/nginx 2>/dev/null
ln -s /tmp/nginx_cache /var/cache/nginx

# Start NGINX
exec nginx -g "daemon off;"