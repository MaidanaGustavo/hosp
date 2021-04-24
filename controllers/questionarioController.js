const knex = require('../database/index.js')

module.exports = {

    inserir: (req, res) => {

        const {pressao, altura, peso, sn_cirurgia, 
        sn_doencashereditarias, 
        sn_alergiaremedio, sn_dst} = req.body

        knex('questionario').insert({

            pressao, 
            altura, 
            peso, 
            sn_cirurgia, 
            sn_doencashereditarias, 
            sn_alergiaremedio,
            sn_dst


        }).then(result => res.json({msg:"Inserido com Sucesso!!"}))
        .catch(err => console.log(err));

    }

}