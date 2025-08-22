FROM node:alpine3.22 AS builder

WORKDIR /app

# Copy package files and install deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy source code
COPY ./src ./static svelte.config.js tsconfig.json vite.config.ts ./

# Build the SvelteKit app
RUN npm run build

# Stage 2: Production image
FROM node:alpine3.22 AS runner

WORKDIR /app

# Copy only the built app and production dependencies
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Use a non-root user for better security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose port 3000 (default for adapter-node)
EXPOSE 3000

# Start the app
CMD ["node", "build"]
