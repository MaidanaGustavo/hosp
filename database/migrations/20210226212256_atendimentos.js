
exports.up = async function(knex,Promise) {
    return knex.schema.createTable('atendimentos',function(table){
        table.increments('id_atendimento').notNullable();
        table.integer('cd_medico').notNullable()
        table.integer('cd_paciente').notNullable()
        table.string('ds_atendimento')
        table.timestamp('data_atendimento').defaultTo(knex.fn.now())
        table.string('tipo_atendimento')
    })
};

exports.down = async function(knex) {
    return knex.schema.dropTable('atendimentos')
};
