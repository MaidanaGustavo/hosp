const express = require('express')
const router = express.Router()
const medicosController = require('../controllers/medicosController')



router.get('/medicos',medicosController.medicos)

router.get('/medicos/:id',medicosController.medicoID)
router.post('/medicos/cadastrar',medicosController.inserirMedico)

router.put('/medicos/:id',medicosController.alterarMedico)

router.delete('/medicos/:id',medicosController.deletarMedico)
module.exports = router