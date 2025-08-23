FROM node:alpine3.22 AS builder

WORKDIR /app

# Install all dependencies (Dev and non-dev)
COPY . .
RUN npx pnpm install

# Build app
RUN npx pnpm run build

# Remove dev dependencies
RUN npx pnpm prune --prod

FROM node:alpine3.22 AS runner

WORKDIR /app

# Grab everything required to run the app
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Run prisma against db and start the app
CMD ["sh", "-c", "npx prisma migrate deploy && node build"]
