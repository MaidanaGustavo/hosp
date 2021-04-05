const express = require('express')
const router = express.Router()
const usuario_medicoController = require('../controllers/usuario_medicoControllers.js')



router.post('/usermed/cadastrar',usuario_medicoController.cadastrar)

router.get('/usermed/usuariosmed',usuario_medicoController.usuariosmed)
router.post('/usermed/validar',usuario_medicoController.validar)

router.put('/usermed/alterar/:id_medicos_users',usuario_medicoController.alterar)

router.delete('/usermed/deletar/:id_medicos_users',usuario_medicoController.deletar)

router.post('/usermed/verificarUsername',usuario_medicoController.verificarUsername)
module.exports = router