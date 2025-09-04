# ---- deps ----
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ---- build ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- runtime ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000
EXPOSE 3000

# install only prod deps in the runtime image
COPY package*.json ./
RUN npm ci 

# copy build artifacts and static assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# drop privileges (node user exists in node image)
USER node

CMD ["npm", "start"]
