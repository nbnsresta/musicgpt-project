# Setup base
FROM node:22-alpine AS base

# Setup dependencies and build app
FROM base AS builder
RUN apk add --no-cache libc6-compat g++ make py3-pip

WORKDIR /app
COPY . .
RUN npm i

WORKDIR /app
RUN npm run build

# Build image artifact
FROM base AS musicgpt
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

CMD ["node", "./server.js"]

