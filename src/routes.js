const express = require('express')
const MotiveController = require('./controllers/MotiveController')

const routes = express.Router()

routes.get("/", (req, res) => { return res.send('<h1>Hello World</h1>') })
routes.get("/motives", MotiveController.index)
routes.get("/motive/:motiveNumber", MotiveController.show)

module.exports = routes