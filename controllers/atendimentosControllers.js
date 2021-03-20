const knex = require('../database/index.js')
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
        
        knex('atendimentos').insert({
            cd_medico : req.body.cd_medico,
            cd_paciente : req.body.cd_paciente,
            ds_atendimento : req.body.ds_atendimento,
            data_atendimento : req.body.data_atendimento,
            tipo_atendimento : req.body.tipo_atendimento
        }).then(result => res.status(201).json({msg:"Inserido com sucesso!"}))
        .catch(err=>res.status(400).json({msg:err.toString()}))
    },

    alterarAtendimento: (req,res)=>{

        if(req.body.cd_paciente){
            knex('atendimentos').where({id_atendimento:req.params.id}).update({cd_paciente:req.body.cd_paciente})
            .then()
        }
        if(req.body.cd_medico){
            knex('atendimentos').where({id_atendimento:req.params.id}).update({cd_medico:req.body.cd_medico})
            .then()
        }
        if(req.body.ds_atendimento){
           
            knex('atendimentos').where({id_atendimento:req.params.id}).update({ds_atendimento:req.body.ds_atendimento})
            .then()
        }
        if(req.body.data_atendimento){
            knex('atendimentos').where({id_atendimento:req.params.id}).update({data_atendimento:req.body.data_atendimento})
            .then()
        }
        if(req.body.tipo_atendimento){
            knex('atendimentos').where({id_atendimento:req.params.id}).update({tipo_atendimento:req.body.tipo_atendimento})
            .then()
        }
        
        knex.where({id_atendimento:req.params.id}).select().table('atendimentos')
        .then(result=>res.status(200).json(result))
    },
    
    deletarAtendimento : (req,res)=>{
        knex('atendimentos').where({id_atendimento:req.params.id}).del()
        .then(resultado=>res.status(200).json({msg:`Atendimento de id : ${req.params.id} deletado!`}))
    }

    
}