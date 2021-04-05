
exports.up = function(knex) {
  return knex.schema.createTable('medicos_users',function(table){
      table.increments('id_medicos_users')
      table.string('username').notNullable()
      table.string('password').notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.integer('cd_medico').references('medicos.id_medico')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('medicos_users')
};
