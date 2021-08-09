const express = require('express')
const router = express.Router()

//import Controllers

const { create } = require('../controllers/post')

//routes

router.get('/', create)

module.exports = router
