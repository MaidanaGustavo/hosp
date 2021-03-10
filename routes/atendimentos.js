const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const knex = require('knex')
const atendimentosController = require('../controllers/atendimentosControllers')



router.get('/atendimentos',atendimentosController.atendimentos)

router.get('/atendimento/:id',atendimentosController.atendimentoPorID)

router.post('/atendimento/cadastrar',atendimentosController.inserirAtendimento)

router.put('/atendimento/:id',(req,res)=>{

    let queryUpdate = ``

    /**
     * if(req.body.cd_paciente){
        queryUpdate = `UPDATE  atendimento SET cd_paciente = '${req.body.cd_paciente}' where id_atendimento = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.cd_medico){
        queryUpdate = `UPDATE  atendimento SET cd_medico = '${req.body.cd_medico}' where id_atendimento = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.ds_atendimento){
        queryUpdate = `UPDATE  atendimento SET ds_atendimento = '${req.body.ds_atendimento}' where id_atendimento = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.data_atendime){
        queryUpdate = `UPDATE  atendimento SET data_atendime = '${req.body.data_atendime}' where id_atendimento = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.tipo_atendime){
        queryUpdate = `UPDATE  atendimento SET tipo_atendime = ${req.body.tipo_atendime} where id_paciente = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }

    client.query(`SELECT * FROM atendimento where id_atendimento = ${req.params.id}`,(err,resp)=>{
        res.json(resp.rows[0])
    })
     * 
     */
})
router.delete('/atendimento/:id',(req,res)=>{
    client.query(`DELETE FROM atendimento where id_atendimento = ${req.param.id}`)

    res.json({status:"Atendimento deletado"})
})


module.exports = router