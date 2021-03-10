const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const path = require('path')



router.get('/medicos',(req,res)=>{
    client.query('SELECT * FROM MEDICO',(err,resp)=>{
        res.json(resp.rows) 
})
})
router.get('/medicos/:id',(req,res)=>{
    client.query(`SELECT * FROM MEDICO where id_medico = ${req.params.id}`,(err,resp)=>{
        res.json(resp.rows) 
})
})
router.post('/medicos/cadastrar',(req,res)=>{
    
    
    let queryInsert = ''
         queryInsert = `
            INSERT INTO public.medico(nome, datanasc, crm, sexo, telefne, endereco, cpf, especialidade)
                VALUES ('${req.body.nome}', '${req.body.datanasc}', 
                    '${req.body.crm}' , '${req.body.sexo}', '${req.body.telefone}', 
                    '${req.body.endereco}', '${req.body.cpf}', '${req.body.especialidade}');`
                    
                    client.query(queryInsert,(err,resp)=>{
                            res.json({resposta: `${req.body.nome} inserido`})
                            //res.send(queryInsert);
                    })            
})

router.put('/medico/:id',(req,res)=>{
    let queryUpdate = ``

    if(req.body.nome){
        queryUpdate = `UPDATE  medico SET nome = '${req.body.nome}' where id_medico = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.datanasc){
        queryUpdate = `UPDATE  medico SET datanasc = '${req.body.datanasc}' where id_medico = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.crm){
        queryUpdate = `UPDATE  medico SET crm = '${req.body.crm}' where id_medico = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }

    if(req.body.sexo){
        queryUpdate = `UPDATE  medico SET sexo = '${req.body.sexo}' where id_medico = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }

    if(req.body.telefone){
        queryUpdate = `UPDATE  medico SET telefne = '${req.body.telefone}' where id_medico = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.endereco){
        queryUpdate = `UPDATE  medico SET endereco = '${req.body.endereco}' where id_medico = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.cpf){
        queryUpdate = `UPDATE  medico SET cpf = '${req.body.cpf}' where id_medico = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.especialidade){
        queryUpdate = `UPDATE  medico SET especialidade = '${req.body.especialidade}' where id_medico = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }

    client.query(`SELECT * FROM medico WHERE id_medico = ${req.params.id}`,(err,resp)=>{
            res.json(resp.rows[0])
    })
})

router.delete('/medico/:id',(req,res)=>{
    let queryDelete = `delete from medico where id_medico = ${req.params.id}`
    client.query(queryDelete,(err,resp)=>{
        res.json({status: "usuario deletado"})
    })
})
module.exports = router