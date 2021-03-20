const express = require('express')
const router = express.Router()
const atendimentosController = require('../controllers/atendimentosControllers')


router.get('/atendimentos',atendimentosController.atendimentos)

router.get('/atendimento/:id',atendimentosController.atendimentoPorID)

router.post('/atendimento/cadastrar',atendimentosController.inserirAtendimento)

router.put('/atendimento/:id',atendimentosController.alterarAtendimento)

router.delete('/atendimento/:id',atendimentosController.deletarAtendimento)


module.exports = router