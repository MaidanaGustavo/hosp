const express = require('express')
const {Pool,Client} = require('pg')
const bodyParser = require('body-parser')
const router = express.Router()

const path = require('path')


const pool = new Pool({
    user : 'postgres',
    host: 'localhost',
    database: 'niggahospital',
    password : 'minhasenha',
    port: 5432,
})

const client = new Client({
    user : 'postgres',
    host: 'localhost',
    database: 'niggahospital',
    password : 'minhasenha',
    port: 5432,
})
client.connect()

router.get('/paciente',(req,res)=>{
    client.query('SELECT * FROM paciente',(req,resp)=>{
            res.json(resp.rows)
})

})

router.post('/paciente/cadastrar',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    let inserirPaciete  = `
    INSERT INTO public.paciente( nome, cpf, rg, datanasc, sexo, id_plano)
        VALUES ('${req.body.nome}', '${req.body.cpf}', '${req.body.rg}', '${req.body.datanasc}', '${req.body.sexo}', ${req.body.id_plano});
    `
        console.log(inserirPaciete)
        client.query(inserirPaciete,(err,resp)=>{
            res.json({status: `${req.body.nome} inserido!`})
        })
})

router.get('/paciente/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    let queryBusca = `SELECT * FROM paciente where id_paciente = ${req.params.id}`
    client.query(queryBusca,(err,resp)=>{
        res.json(resp.rows[0])
    })
})

router.put('/paciente/:id',(req,res)=>{
    let queryUpdate = ``

    if(req.body.nome){
        queryUpdate = `UPDATE  paciente SET nome = '${req.body.nome}' where id_paciente = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.datanasc){
        queryUpdate = `UPDATE  paciente SET datanasc = '${req.body.datanasc}' where id_paciente = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.sexo){
        queryUpdate = `UPDATE  paciente SET sexo = '${req.body.sexo}' where id_paciente = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.cpf){
        queryUpdate = `UPDATE  paciente SET cpf = '${req.body.cpf}' where id_paciente = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.rg){
        queryUpdate = `UPDATE  paciente SET rg = '${req.body.rg}' where id_paciente = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    if(req.body.id_plano){
        queryUpdate = `UPDATE  paciente SET id_plano = ${req.body.id_plano} where id_paciente = ${req.params.id}`
        client.query(queryUpdate,(req,resp)=>{})
    }
    client.query(`SELECT * FROM paciente WHERE id_paciente = ${req.params.id}`,(err,resp)=>{
            res.json(resp.rows[0])
    })
})

router.delete('/paciente/:id',(req,res)=>{
    client.query(`delete from paciente where id_paciente = ${req.params.id}`)
    res.json({status:"Paciente deletado"})
})
router.get('/paciente/atendimentos/:id',(req,res)=>{
    client.query(`SELECT * FROM atendimento where cd_paciente = ${req.params.id}`,(err,resp)=>{
        res.json(resp.rows)
    })
})
module.exports = router