
exports.up = function(knex) {
    return knex.schema.createTable('especialidade',function(table){
        table.increments('cd_especialidade').notNullable();
        table.string('ds_especialidade').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('especialidade')
};
