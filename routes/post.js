const express = require('express')
const router = express.Router()

//import Controllers

const { create } = require('../controllers/post')

//routes

router.post('/post', create)

module.exports = router
