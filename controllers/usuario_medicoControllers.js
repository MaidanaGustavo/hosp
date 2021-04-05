const knex = require('../database/index')

const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);
module.exports = {

        cadastrar: (req,res) =>{
            const {username,password,cd_medico} = req.body;
           
            const hash = bcrypt.hashSync(password, salt);
            
            knex('medicos_users').insert({
                username,
                password:hash,
                cd_medico
            }).then(result => res.status(201).json({msg:"Inserido com sucesso!"}))
            .catch(err=>res.status(400).json({msg:err.toString()}))
        },

        usuariosmed: (req,res)=>{
            knex.select().table('medicos_users')
            .then(result=>res.json(result))
        },
        validar: (req,res)=>{
           const  {username,password} = req.body
           const hashi = bcrypt.hashSync(password, salt);

            knex('medicos_users')
            .where({
                username
            })
            .first('password')
            .then(result => {    
                bcrypt.compare(password, result.password, function(err, resultado) {
                    if (err) { throw (err); }
                    if(resultado){
    
                        res.status(200).json({msg:"Validado!"})
                    }else{
                        res.status(400).json({msg:"Não Validado!"}) 
                    }
                }); 
            })
            .catch(err=>res.status(404).json({msg:err.toString()}))
        },
        alterar: (req,res) =>{
            const {id_medicos_users} = req.params
            const {username,password} = req.body
            if(username){
                knex('medicos_users')
                .where({id_medicos_users})
                .update({username})
                .then()
            }

            if(password){
                const hash = bcrypt.hashSync(password, salt);
                knex('medicos_users')
                .where({id_medicos_users})
                .update({
                    password:hash
                })
                .then()
            }

            knex.where({id_medicos_users}).select().table('medicos_users')
            .then(result=>res.status(200).json(result))
        },

        deletar: (req,res) =>{
            const {id_medicos_users} = req.params
            knex('medicos_users').where({id_medicos_users})
            .del()
        .then(resultado=>res.status(200).json({msg:`Usuario medico de id : ${id_medicos_users} deletado!`}))
        },

        verificarUsername: (req,res) =>{
            const {username} = req.body
            knex('medicos_users')
            .where({
                username
            }).then(result => res.status(200).json(result))
            .catch(err=>res.status(400).json({msg:err.toString()}))
        }



}