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

app.use(atendimentosRotas);
app.use(pacientesRotas);
app.use(medicosRotas);
app.use(usrmedicos);
app.use(especialidade);



app.listen(3030)