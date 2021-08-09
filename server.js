const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

//app
const app = express()

//datbase

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
app.use(morgan('dev'))
app.use(bodyParser.json())

//route
app.get('*', (req, res) => {
  res.json({
    data: 'Hlw from server',
  })
})

//port

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Server is started in :${port}`)
})
