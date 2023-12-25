const customerEntry = require('../models/customerSchema') //import custom schema for customer entries
exports.createCustomer = async (req, res) =>{
    try {
        //try to create new customer using request body
        const newCustomer = new customerEntry(req.body)
        const saveCustomer = await newCustomer.save() //wait to save entry to database
        res.status(200).json(saveCustomer)
    } catch (error) {
        res.status(500).json(error)
        console.log('Error in creating customer')
    }
}

exports.getCustomer = async (req,res) =>{
    try {
        //try to get all customers from database
        const customer = await customerEntry.find();
        res.json(customer) //wait to get a response back with list of entries
    } catch (error) {
        res.status(500).json(error)
        console.log('Error in getting customer')
    }
}

exports.deleteCustomer = async (req, res) =>{
    try {
        //try to delete customer from database by finding the id of the specific customer
        const customer = await customerEntry.findByIdAndDelete(req.params.id)
        res.json(customer) 
    } catch (error) {
        res.status(500).json(error)
        console.log('Error in deleting customer')
    }
}

exports.updateCustomer = async(req, res)=>{
    const id = req.params.id
    const updatedInfo = req.body

    try {
        //try to update customer by finding the id of the specific customer
        const updateCustomer = await customerEntry.findByIdAndUpdate(
            id,
            updatedInfo,
            {new:true} //return updated info
        )
        res.json(updateCustomer)
    } catch (error) {
        res.status(500).json(error)
        console.log('Error in deleting customer')
    }
}