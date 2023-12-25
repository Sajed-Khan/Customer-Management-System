const express = require('express')
const router = express.Router() //allows to create routes and link them for CRUD requests and responses
const customerController = require('../controller/customerController') //import controller for route logic

//routes
router.post('/customer', customerController.createCustomer) //creates new customer
router.get('/customer', customerController.getCustomer) //gets all customers
router.delete('/customer/:id', customerController.deleteCustomer) //deletes customer by id
router.put('/customer/:id', customerController.updateCustomer) //updates customer by id

module.exports = router