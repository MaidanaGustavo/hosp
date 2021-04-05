const express = require('express')
const router = express.Router()
const pacienteController = require('../controllers/pacienteController')

router.post('/paciente/cadastrar',pacienteController.cadastrar)
router.get('/pacientes',pacienteController.pacientes)
router.get('/paciente/:id_paciente',pacienteController.pacienteId)
router.put('/paciente/:id_paciente',pacienteController.alterarPaciente)
router.delete('/paciente/:id_paciente',pacienteController.deletarPaciente)
router.get('/paciente/atendimento/:cd_paciente',pacienteController.pacienteAtendimentos)
module.exports = router