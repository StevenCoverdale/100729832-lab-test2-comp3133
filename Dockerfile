# Step 1: Build Angular app
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Step 2: Serve with NGINX
FROM nginx:alpine
COPY --from=build /app/dist/100729832-lab-test2-comp3133/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf