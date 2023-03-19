FROM node:alpine AS build
WORKDIR /app
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.15.2-alpine AS ngi
COPY --from=build /app/dist/ballgame_frontend /user/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/
# CMD envsubst '${BACKEND_URI}' < /etc/nginx/conf.d/nginx.conf > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'
