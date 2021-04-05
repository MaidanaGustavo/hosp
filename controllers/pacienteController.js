const knex = require('../database/index')

module.exports = {

    cadastrar: (req,res) =>{
        const {nome,cpf,endereco,telefone,datanasc,nome_mae} = req.body;
        knex('paciente')
        .insert({
            nome,
            cpf,
            endereco,
            telefone,
            datanasc,
            nome_mae
        }).then(result => res.status(201).json({msg: "Inserido com sucesso!"}))
        .catch(err => res.status(404).json({msg:err.toString()}))
    },
    pacientes: (req,res) =>{
        knex.select().table('paciente')
        .then(result=>res.status(200).json(result))

    },
    pacienteId: (req,res) =>{
        const {id_paciente} = req.params
        knex('paciente').where({
                id_paciente
        })
        .select()
        .then(result=> res.status(200).json(result))
    },

    alterarPaciente: (req,res) =>{
        const {id_paciente} = req.params
        const {nome,cpf,endereco,telefone,datanasc,nome_mae} = req.body

        if(nome) {
            knex('paciente')
            .where({id_paciente})
            .update({nome})
            .then()
        }
        if(cpf){
            knex('paciente')
            .where({id_paciente})
            .update({cpf})
            .then()
        }

        if(endereco){
            knex('paciente')
            .where({id_paciente})
            .update({endereco})
        }
        if(telefone){
            knex('paciente')
            .where({id_paciente})
            .update({telefone})
            .then()
        }
        if(datanasc){
            knex('paciente')
            .where({id_paciente})
            .update({datanasc})
            .then()
        }

        if(nome_mae){
            knex('paciente')
            .where({id_paciente})
            .update({nome_mae})
            .then()
        }

        knex('paciente').where({id_paciente})
        .select()
        .then(result=> res.status(200).json(result))
    },

    deletarPaciente: (req,res)=>{
        const {id_paciente} = req.params
        knex('paciente')
        .where({id_paciente}).del()
        .then(resultado=>res.status(200).json({msg:`Paciente de id : ${id_paciente} deletado!`}))
    },
    pacienteAtendimentos: (req,res)=>{
        const {cd_paciente} = req.params
        knex('atendimentos')
        .where({cd_paciente})
        .select()
        .then(result => res.json(result))
    }
}
