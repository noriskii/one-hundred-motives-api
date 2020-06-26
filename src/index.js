require('dotenv').config()

const express = require('express')
const cors = require('cors')

const routes = require('./routes')
//const mongoose = require('./mongooseConnection')
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(process.env.port || 3333)
