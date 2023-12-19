const express = require('express');
const connectDB = require('./config/db')
require ('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes/Customer'))

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
})