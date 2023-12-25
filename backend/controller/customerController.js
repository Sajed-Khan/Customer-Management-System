const customerEntry = require('../models/customerSchema')
exports.createCustomer = async (req, res) =>{
    try {
        const newCustomer = new customerEntry(req.body)
        const saveCustomer = await newCustomer.save()
        res.status(200).json(saveCustomer)
    } catch (error) {
        res.status(500).json(error)
        console.log('Error in creating customer')
    }
}

exports.getCustomer = async (req,res) =>{
    try {
        const customer = await customerEntry.find();
        res.json(customer)
    } catch (error) {
        res.status(500).json(error)
        console.log('Error in getting customer')
    }
}

exports.deleteCustomer = async (req, res) =>{
    try {
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
        const updateCustomer = await customerEntry.findByIdAndUpdate(
            id,
            updatedInfo,
            {new:true}
        )
        res.json(updateCustomer)
    } catch (error) {
        res.status(500).json(error)
        console.log('Error in deleting customer')
    }
}