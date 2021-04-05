
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('medicos_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('medicos_users').insert([
       {
         username:"willian.arao",
         password: "1234567",
         cd_medico: "1"
       },
       {
        username: "carlos.rio",
        password: "1234567",
        cd_medico: "2"
      },
      {
        username: "juliana.caetano",  
        password: "1234567",
        cd_medico: "3"
      }
      ]);
    });
};
