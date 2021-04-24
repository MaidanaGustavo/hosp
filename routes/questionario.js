const express = require('express')
const router = express.Router()
const questionarioController = require('../controllers/questionarioController')


    router.post('/inserirQuestionario', questionarioController.inserir);
    

module.exports = router