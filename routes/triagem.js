const express = require('express')
const router = express.Router()
const triagemController = require('../controllers/triagemController')


    router.post('/inserirTriagem', triagemController.inserir);
    

module.exports = router