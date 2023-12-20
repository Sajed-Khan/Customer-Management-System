const Customer = require('../models/customerSchema')
exports.createUser = async (req, res) =>{
    try {
        const newCustomer = new Customer(req.body)
        const saveCustomer = await newCustomer.save()
        res.status(200).json(saveCustomer)
    } catch (error) {
        res.status(500).json(error)
        console.log('Error in creating customer')
    }
}

exports.getUser = async (req,res) =>{
    try {
        const customer = await Customer.find();
        res.json(customer)
    } catch (error) {
        res.status(500).json(error)
        console.log('Error in getting customer')
    }
}