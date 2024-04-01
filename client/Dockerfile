# Use the official Node.js image as base image for building the Vue.js application
FROM node:20.11-alpine

# Set the working directory in the container
WORKDIR /app/client/

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Vue.js application
RUN npm run build

# Stage 2: Serve the built Vue.js application using Nginx
FROM nginx:20.11-alpine
COPY nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy from the stage 1
COPY --from=builder /dist /usr/share/nginx/html/nested-app
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]