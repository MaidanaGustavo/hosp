
exports.up = function(knex) {
  
    return knex.schema.createTable('questionario',function(table){
        table.increments('cd_questionario').notNullable();
        table.string('pressao').notNullable();
        table.string('altura').notNullable();
        table.string('peso').notNullable();
        table.string('sn_cirurgia').notNullable();
        table.string('sn_doencashereditarias').notNullable();
        table.string('sn_alergiaremedio').notNullable();
        table.string('sn_dst').notNullable();
        
    })

};

exports.down = function(knex) {
  
    return knex.schema.dropTable('questionario');

};
