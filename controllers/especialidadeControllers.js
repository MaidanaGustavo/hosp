const knex = require('../database/index.js')

module.exports = {

    inserir: (req, res) => {

        const {ds_especialidade} = req.body

        knex('especialidade').insert({

            ds_especialidade

        }).then(result => res.json({msg:"Inserido com Sucesso!"}))
        .catch(err => console.log(err));

    }

}