# Build BASE
FROM node:18-alpine as base
LABEL author="nhattm17"

WORKDIR /app
COPY package.json yarn.lock ./
RUN apk update && apk add --no-cache git \
    && yarn --frozen-lockfile \
    && yarn cache clean

# Build Image
FROM node:18-alpine AS build
LABEL author="nhattm17"

WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .

# Cài đặt node-prune
RUN apk update && apk add --no-cache git curl \
    && curl -sfL https://gobinaries.com/tj/node-prune | sh \
    && yarn build \
    && cd .next/standalone \
    && node-prune

# Build production
FROM node:18-alpine AS production
LABEL author="nhattm17"

WORKDIR /app

# Thiết lập biến môi trường cho Next.js
ENV NODE_ENV=production
ENV PORT=3002  

COPY --from=build /app/public ./public
COPY --from=build /app/next.config.mjs ./

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

# Đảm bảo quyền thực thi cho server.js
RUN chmod +x /app/server.js \
    && chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 3002

CMD ["node", "server.js"]
