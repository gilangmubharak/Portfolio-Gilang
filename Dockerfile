FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:alpine

# Setup direktori
RUN mkdir -p /tmp/nginx && chmod -R 777 /tmp

# Hanya hapus config default yang bentrok 
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy aplikasi dan config
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf  

CMD ["sh", "-c", "mkdir -p /tmp/run && exec nginx -p /tmp/run -g 'daemon off; pid /tmp/run/nginx.pid;'"]