# Use a base image with Node.js installed
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app/server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install server dependencies
RUN npm install

# Copy the rest of the server application code
COPY . .

# Expose the port the server runs on
EXPOSE 3000

## Set the environment variable for MongoDB URI

# Define the command to run the server application
CMD ["npm", "run", "start"]
