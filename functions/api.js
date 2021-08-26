const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const serverless = require('serverless-http')

//app
const app = express()
const router = express.Router()

const postRoutes = require('../routes/post')
const authRoutes = require('../routes/auth')

//database

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err))

//middlewares
app.use(cors())
app.use(bodyParser.json())

//route middleware
app.use('/api', postRoutes)
app.use('/api', authRoutes)

module.exports.handler = serverless(app)
