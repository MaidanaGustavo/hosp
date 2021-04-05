
exports.up = function(knex) {
    return knex.schema.createTable('medicos',function(table){
        table.increments('id_medico');
        table.string('nome');
        table.string('crm');
        table.date('datanasc');
        table.string('sexo');
        table.string('telefone')
        table.string('cpf')
        table.string('especialidade')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('medicos')
};
