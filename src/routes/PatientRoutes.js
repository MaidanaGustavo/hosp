const {Router} = require('express')
const  PatientRoutes = Router()
const PatientController = require('../app/controllers/PatientController')

PatientRoutes.get('/patients/',PatientController.index)
PatientRoutes.get('/patients/:cpf',PatientController.show)
PatientRoutes.post('/patients/',PatientController.save)
PatientRoutes.put('/patients/:cpf',PatientController.update)
PatientRoutes.delete('/patients/:cpf',PatientController.delete)

module.exports = PatientRoutes
