const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController')

router.post('/customer', customerController.createCustomer)
router.get('/customer', customerController.getCustomer)
router.delete('/customer/:id', customerController.deleteCustomer)
router.put('/customer/:id', customerController.updateCustomer)

module.exports = router