const knex = require('../database/index.js')

module.exports = {

    inserir: (req, res) => {

        const {coren, nome, cpf, dataNasc,
        cd_especialidade,
        endereco} = req.body

        knex('enfermeira').insert({

            coren,
            nome,
            cpf,
            dataNasc,
            cd_especialidade,
            endereco

        }).then(result => res.json(result))
        .catch(err => console.log(err));

    }

}