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



router.post('/usuariomed/cadastrar',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    let queryInsert = `INSERT INTO public.usuario_med(username, senha, cd_medico)
        VALUES ('${req.body.username}', md5('${req.body.senha}'), ${req.body.cd_medico});`
    console.log(queryInsert)
        client.query(queryInsert)
        //res.json({status: "Usuario Criado"})
        res.send((req.body))
})

router.get('/usuariosmed',(req,res)=>{
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    let queryPega  = `SELECT * FROM usuario_med`
    client.query(queryPega,(err,resp)=>{
        res.json(resp.rows)
    })
})

router.post('/usuariosmed/verificar',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    
    let queryConsulta = `select * from usuario_med 
    where username = '${req.body.username}' and senha = md5('${req.body.senha}')`

    client.query(queryConsulta,(err,resp)=>{
        console.log(resp.rows)
        res.json(resp.rows)
    })
})

module.exports = router