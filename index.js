const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const atendimentosRotas = require('./routes/atendimentos')
const pacientesRotas = require('./routes/paciente')
const medicosRotas = require('./routes/medicos')
const usrmedicos = require('./routes/usuarios_medicos')
const especialidade = require('./routes/especialidade')
const questionario = require('./routes/questionario')
const triagem = require('./routes/triagem')

app.use(atendimentosRotas);
app.use(pacientesRotas);
app.use(medicosRotas);
app.use(usrmedicos);
app.use(especialidade);
app.use(questionario);
app.use(triagem);

app.listen(3030)