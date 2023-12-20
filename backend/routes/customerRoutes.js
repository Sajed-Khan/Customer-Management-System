const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController')

router.post('/customer', customerController.createUser)
router.get('/customer', customerController.getUser)


module.exports = router