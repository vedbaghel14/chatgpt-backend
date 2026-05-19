const express = require('express')
const chatcreate = require('../controllers/chat.controller')
const authmiddleware = require('../middleware/auth.middleware')

const router = express.Router()

router.post('/',authmiddleware,chatcreate)

module.exports = router