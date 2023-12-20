const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');
require ('dotenv').config();

const app = express();
app.use(cors())

const port = process.env.PORT || 5000;

connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes/customerRoutes'))

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
})