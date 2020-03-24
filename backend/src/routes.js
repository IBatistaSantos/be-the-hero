const express = require('express')
const OngController = require('./controllers/OngController')

const IncidentController = require('./controllers/IncidentController') 
const ProfileController = require('./controllers/ProfileController')
const SessioControoler = require('./controllers/SessionController')
const routes = express.Router();

routes.post('/sessions',SessioControoler.store)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store);

routes.post('/incidents',IncidentController.store)
routes.get('/incidents',IncidentController.index)
routes.delete('/incidents/:id',IncidentController.destroy)

routes.get('/profile', ProfileController.index)
module.exports = routes;