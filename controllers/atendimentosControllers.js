const knex = require('../database/index.js')
const bodyP = require('body-parser')

module.exports = {
    atendimentos: (req,res)=>{
      knex.select().table('atendimentos')
      .then(result=>res.json(result))
        
    },
    atendimentoPorID: (req,res)=>{
        knex('atendimentos').where({
            id_atendimento : req.params.id
        }).select().then(result => res.json(result))
    },
    inserirAtendimento: (req,res)=>{
        console.log(req.body.cd_medico)
        /*
        knex('atendimentos').insert({
            cd_medico : req.body.cd_medico,
            cd_paciente : req.body.cd_paciente,
            ds_atendimento : req.body.ds_atendimento,
            data_atendimento : req.body.data_atendimento,
            tipo_atendimento : req.body.tipo_atendimento
        }).then(result => res.json(result))

    */
    }
    
}