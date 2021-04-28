const knex = require('../database/index.js')

module.exports = {

    inserir: (req, res) => {

        const {cod_class_risc} = req.body

        knex('triagem').insert({
    
            cod_class_risc

        }).then(result => res.json({msg:"Inserido com Sucesso!!"}))
        .catch(err => console.log(err));

    }

}