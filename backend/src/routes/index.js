const express = require('express')
const routes = express.Router()

const OngController = require('../controllers/OngController')
const IncidentController = require('../controllers/IncidentController')

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.store)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes
