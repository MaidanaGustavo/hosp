
exports.up = function(knex) {
    return knex.schema.createTable('paciente',function(table){
        table.increments('id_paciente')
        table.string('nome')
        table.string('cpf')
        table.string('endereco')
        table.string('telefone')
        table.date('datanasc')
        table.string('nome_mae')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pacientes')
};
