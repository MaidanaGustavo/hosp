const {Router} = require('express')
const PatientPhonesRoute  = Router()
const PatientPhoneController = require('../app/controllers/PatientPhoneController')

PatientPhonesRoute.get('/patientsphones',PatientPhoneController.index)
PatientPhonesRoute.get('/patientsphones/:patient_id',PatientPhoneController.show)
PatientPhonesRoute.post('/patientsphones',PatientPhoneController.save)
PatientPhonesRoute.put('/patientsphones/:patient_id/:old_phone_number',PatientPhoneController.update)
PatientPhonesRoute.delete('/patientsphones/:phone_number',PatientPhoneController.delete)

module.exports = PatientPhonesRoute
