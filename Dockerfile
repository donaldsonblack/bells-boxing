# ---- base ----
FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

# ---- builder ----
FROM base as builder
WORKDIR /app
# 1) install deps first so "next" exists
COPY package*.json ./
RUN npm ci
# 2) then copy source and build
COPY . .
RUN npm run build

# ---- production ----
FROM node:18-alpine as production
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1

# Install only prod deps in the runtime image
COPY package*.json ./
RUN npm ci --omit=dev

# Least-privilege user
RUN addgroup -g 1001 -S nodejs \
 && adduser -S nextjs -u 1001
USER nextjs

# App artifacts
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

CMD ["npm", "start"]

# ---- dev (unchanged) ----
FROM base as dev
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
