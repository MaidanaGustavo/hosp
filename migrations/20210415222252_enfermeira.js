
exports.up = function(knex) {

    return knex.schema.createTable('enfermeira',function(table){
        table.increments('id_enfermeira').notNullable();
        table.string('coren').notNullable();
        table.string('nome').notNullable();
        table.string('cpf').notNullable();
        table.date('dataNasc').notNullable();
        table.integer('cd_espec').references('especialidade.cd_especialidade').notNullable();
        table.string('endereco').notNullable();
    })
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('enfermeira')

};
