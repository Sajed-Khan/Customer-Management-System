const express = require('express')
const router = express.Router()

router.get('/', customerController.homepage)


module.exports = router