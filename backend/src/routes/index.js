const express = require('express')
const routes = express.Router()

const OngController = require('../controllers/OngControllers')

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

module.exports = routes
