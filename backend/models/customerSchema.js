const mongoose = require('mongoose')

//function to create new customer in the database in specified model
const customerSchema = new mongoose.Schema({
    //customer will input data in the name, email and phone format
    name: String,
    email: String,
    phone: String,
})

module.exports = mongoose.model('Customer', customerSchema)