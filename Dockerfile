# ===========================
# Build Angular
# ===========================
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ===========================
# Nginx
# ===========================
FROM nginx:1.27-alpine

# 移除 nginx 預設 welcome page
RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/ballgame_frontend /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]