# Lumora Dockerfile
# Multi-stage build for fullstack (React + NestJS)

# Stage 1: Build frontend
FROM node:20 AS frontend-build
WORKDIR /app
COPY apps/frontend/package.json apps/frontend/package-lock.json ./apps/frontend/
WORKDIR /app/apps/frontend
RUN npm install
COPY apps/frontend ./
RUN npm run build

# Stage 2: Build backend
FROM node:20 AS backend-build
WORKDIR /app
COPY apps/backend/package.json apps/backend/package-lock.json ./apps/backend/
WORKDIR /app/apps/backend
RUN npm install
COPY apps/backend ./
COPY --from=frontend-build /app/apps/frontend/dist ./public
RUN npm run build

# Stage 3: Production image
FROM node:20-slim
WORKDIR /app
COPY --from=backend-build /app/apps/backend/dist ./dist
COPY --from=backend-build /app/apps/backend/package.json ./
COPY --from=backend-build /app/apps/backend/node_modules ./node_modules
COPY --from=backend-build /app/apps/backend/public ./public
EXPOSE 3000
CMD ["node", "dist/main.js"]
