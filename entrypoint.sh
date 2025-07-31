#!/bin/sh
mkdir -p /tmp/nginx/client_temp
exec nginx -g "daemon off; client_temp_path /tmp/nginx/client_temp;"
