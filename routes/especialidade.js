const express = require('express')
const router = express.Router()
const especialidadeController = require('../controllers/especialidadeControllers')


    router.post('/inserirEspecialidade', especialidadeController.inserir);
    

module.exports = router