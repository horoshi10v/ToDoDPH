# ToDo App

This ToDo app consists of a RESTful API server built with Express.js and MongoDB for the backend, and a Vue.js client that communicates with the server using Axios.

## Features

- Add a new category/task
- Update/delete a category/task

## Project Structure

The project is organized into two main folders:

- `server/`: Contains the Express.js server code along with MongoDB integration.
- `client/`: Contains the Vue.js client-side code that interacts with the server.

## Technologies Used

### Server Side
- Express.js: A web application framework for Node.js
- MongoDB: A NoSQL database for storing task data
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js

### Client Side
- Vue.js: A progressive JavaScript framework for building user interfaces
- Axios: A promise-based HTTP client for making requests to the server

## Running the Application

To run the ToDo app locally using Docker Compose, follow these steps:

1. Clone this repository: `https://github.com/horoshi10v/ToDoDPH.git`
2. Navigate to the project directory: `cd ToDoDPH`
3. Run Docker Compose: `docker-compose up --build`
4. Access the application in your web browser at: `http://localhost:8080`

## Additional Notes

- Ensure Docker and Docker Compose are installed on your system before running the application.
- By default, the application runs on port 8080. You can change this port in the `docker-compose.yml` file if needed.
