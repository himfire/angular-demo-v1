# Dockerizing the Angular application needs two steps.
#1. Build Angular application and generate dist files.
#2. Run the dist folder files under Nginx.

#stage 1
FROM node:16.13.1 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
#COPY --from=node /app/dist/<app-name>   /usr/share/nginx/html
COPY --from=node /app/dist/blue-ui   /usr/share/nginx/html
