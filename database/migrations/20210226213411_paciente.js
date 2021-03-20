
exports.up = async function(knex) { 
    return knex.schema.createTable('pacientes',function(table){
        table.increments('id_paciente')
        table.string('nome')
        table.string('cpf')
        table.string('endereco')
        table.string('telefone')
        table.date('datanasc')
        table.string('nome_mae')

    })
  
};

exports.down = async function(knex) {
  return knex.schema.dropTable('pacientes')
};
