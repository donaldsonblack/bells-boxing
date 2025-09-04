# ---- deps & build ----
FROM node:18-alpine AS builder
WORKDIR /app
RUN apk add --no-cache g++ make py3-pip libc6-compat

# install deps first (ensures 'next' exists)
COPY package*.json ./
RUN npm ci

# now copy source and build
COPY . .
# make sure your next.config.js has:  module.exports = { output: 'standalone' }
RUN npm run build

# ---- runtime ----
FROM node:18-alpine AS production
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1

# copy the minimal standalone server + static assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# drop privs
RUN addgroup -g 1001 -S nodejs \
 && adduser -S nextjs -u 1001
USER nextjs

EXPOSE 3000
# the standalone bundle includes server.js at repo root within the copied tree
CMD ["node", "server.js"]
