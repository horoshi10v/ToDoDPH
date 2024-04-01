# Use a base image with Node.js LTS on Alpine Linux
FROM node:lts-alpine as builder

# Set the working directory inside the container
WORKDIR /app/client

# Copy package.json and yarn.lock to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight Nginx image to serve the built Vue.js application
FROM nginx:alpine as production-build

# Copy the built application to the Nginx web server directory
COPY --from=builder /app/client/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Default command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
