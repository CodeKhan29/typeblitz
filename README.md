# TypeBlitz

Inspired by [MonkeyType](https://monkeytype.com), TypeBlitz is a minimalistic online typing application designed to help users improve their typing speed and accuracy with a social and competitive twist. 

PinguType is implemented as a MERN stack, using [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [React.js](https://react.dev/), and [Node.js](https://nodejs.org/en

Live Link: https://typeblitz.onrender.com/

# Installation and Setup

### Clone the directory on your machine:

```bash
git clone https://github.com/CodeKhan29/typeblitz
```

### Setup and run the frontend:
```bash
# From the root directory:
cd frontend
npm install
npm start
```
The frontend application will run on 
```
http://localhost:3000
```

### Setup and run the backend:
#### Create a .env file
You will first need to create a .env file in the backend directory to connect the backend application to your MongoDB database. Create a file named 
```
.env
```
in the backend folder. Paste this single line into the file
``` 
mongoDB_URL="YOUR_MONGODB_DATABASE_URL_CONNECTION_STRING"
```
replacing "YOUR_MONGODB_DATABASE_URL_CONNECTION_STRING" with your MongoDB database's connection string.

#### Run the backend
```bash
# From the root directory:
cd backend
npm install
npm start
```
The backend application will run on 
```
http://localhost:3333
```
