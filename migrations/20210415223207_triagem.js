
exports.up = function(knex) {
    return knex.schema.createTable('triagem',function(table){
        table.increments('cd_triagem').notNullable();
        table.integer('id_paciente').references('paciente.id_paciente').notNullable();
        table.integer('cod_class_risc').notNullable();
        table.integer('cd_enfermeira').references('enfermeira.id_enfermeira').notNullable();
        table.integer('cd_questionario').references('questionario.cd_questionario').notNullable();
        table.timestamp('data_triagem').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('triagem');
};
