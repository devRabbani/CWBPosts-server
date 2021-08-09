const express = require('express')
const router = express.Router()

//import Controllers

const { login } = require('../controllers/auth')

//routes

router.post('/login', login)

module.exports = router
