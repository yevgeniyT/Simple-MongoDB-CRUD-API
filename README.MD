# Simple MongoDB CRUD API
This is a simple Node.js API that allows you to test and practice connecting to MongoDB. It provides CRUD operations on user data.

## Installation

1. Install Node.js if you haven't already.
2. Clone this repository.
3. Run **npm install** in the project directory to install the dependencies.
4. In the **.env** file, set **DB_URL** to your MongoDB connection string and 
**SERVER_PORT** to the desired server port.
5. Run **npm start** to start the server.

## API Endpoints
- GET /api/users: Get all users.
- GET /api/users/:id: Get a single user by ID.
- POST /api/users: Create a new user.
- PUT /api/users/:id: Update a user by ID.
- DELETE /api/users/:id: Delete a user by ID.

## Usage
After starting the server, you can use an API client like **[Postman](https://www.postman.com/)**  to test the CRUD operations.

## Get all users
Send a GET request to /api/users:
```
GET http://localhost:3002/api/users
````
## Get a single user by ID
Send a GET request to /api/users/:id:

```
GET http://localhost:3002/api/users/8fb32301-cb9f-4c0b-9eb6-226321893823
```
## Create a new user
Send a POST request to /api/users with the following JSON body:
```
{
  "name": "Jane Doe",
  "email": "janedoe@gmail.com",
  "age": 28
}
```
```
POST http://localhost:3002/api/users
```
## Update a user by ID
Send a PUT request to /api/users/:id with the following JSON body:
```
{
  "name": "Jane Doe",
  "email": "jane.doe@gmail.com",
  "age": 29
}
```
```
PUT http://localhost:3002/api/users/8fb32301-cb9f-4c0b-9eb6-226321893823
```
## Delete a user by ID
Send a DELETE request to /api/users/:id:
```
DELETE http://localhost:3002/api/users/8fb32301-cb9f-4c0b-9eb6-226321893823
```

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS
- UUID
- Morgan
- Nodemon
- Body-parser

## Authors

Yevgeniy Tolkachev