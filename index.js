const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const atendimentosRotas = require('./routes/atendimentos')
const pacientesRotas = require('./routes/pacientes')
const medicosRotas = require('./routes/medicos')
const usrmedicos = require('./routes/usuario_medico')
const usrpacientes = require('./routes/usuario_paciente')
app.use(atendimentosRotas);
app.use(pacientesRotas);
app.use(medicosRotas);
app.use(usrmedicos);
app.use(usrpacientes)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(8080)