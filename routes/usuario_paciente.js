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

router.get('/usuariopac',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    let queryPega = `select * from usuario_pac`

    client.query(queryPega,(err,resp)=>{
        res.json(resp.rows)
    })
})

router.post('/usuariopac/cadastrar',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    let queryInsert = `INSERT INTO public.usuario_pac(username, senha, cd_paciente)
        VALUES ('${req.body.username}', md5('${req.body.senha}'), ${req.body.cd_paciente});`
    console.log(queryInsert)
        client.query(queryInsert)
        res.send((req.body))
})
router.post('/usuariopac/verificar',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    
    let queryConsulta = `select * from usuario_pac 
    where username = '${req.body.username}' and senha = md5('${req.body.senha}')`

    client.query(queryConsulta,(err,resp)=>{
        console.log(resp.rows)
        res.json(resp.rows)
    })
})


module.exports = router