const knex = require('../database/index')


module.exports = {
    
    medicos: (req,res)=>{
        knex.select().table('medicos')
        .then(result=>res.status(200).json(result))
    },
    medicoID: (req,res)=>{
        knex('medicos').where({
            id_medico: req.params.id
        }).select().then(result=>res.status(200).json(result))
    },
    inserirMedico: (req,res)=>{
        const {nome,crm,datanasc,sexo,telefone,cpf,especialidade} = req.body
        knex('medicos').insert({
            nome,
            crm,
            datanasc,
            sexo,
            telefone,
            cpf,
            especialidade
        }).then(result => res.status(201).json({msg: "Inserido com sucesso!"}))
        .catch(err => res.status(404).json({msg:err.toString()}))
    },
    alterarMedico: (req,res) =>{
        const {nome,crm,datanasc,sexo,telefone,cpf,especialidade} = req.body

        if(nome){
           knex('medicos')
           .where({id_medico:req.params.id})
           .update({
               nome
           }).then()
        }
        if(datanasc){
           knex('medicos')
           .where({id_medico:req.params.id})
           .update({
               datanasc
           }).then() 
        }
        if(crm){
            knex('medicos')
            .where({id_medico:req.params.id})
            .update({
                crm
            }).then()
        }
    
        if(sexo){
            knex('medicos')
           .where({id_medico:req.params.id})
           .update({
               sexo
           }).then()
        }
    
        if(telefone){
            knex('medicos')
           .where({id_medico:req.params.id})
           .update({
               telefone
           }).then()
        }
        if(cpf){
            knex('medicos')
            .where({id_medico:req.params.id})
            .update({
                cpf
            }).then()
        }
        if(especialidade){
            knex('medicos')
            .where({id_medico:req.params.id})
            .update({
                especialidade
            }).then()
        }

        knex('medicos').where({id_medico : req.params.id})
        .select()
        .then(result=> res.status(200).json(result))
    },

    deletarMedico: (req,res) =>{
        knex('medicos').where({id_medico:req.params.id}).del()
        .then(resultado=>res.status(200).json({msg:`Médico de id : ${req.params.id} deletado!`}))
    }
}