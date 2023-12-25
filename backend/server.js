const express = require('express');
const connectDB = require('./config/db') //importing function to connect to MongoDB
const cors = require('cors');
require ('dotenv').config();

const app = express() //create an express application

app.use(cors()) //bypass CORS related errors between frontend and backend

const port = process.env.PORT || 5000 //set port

connectDB() //initialize connection to MongoDB

//middleware to parse request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//customerRoutes for handling requests
app.use('/', require('./routes/customerRoutes'))

//start server on port
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})