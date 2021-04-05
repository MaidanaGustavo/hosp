
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('atendimentos').del()
    .then(function () {
      // Inserts seed entries
      return knex('atendimentos').insert([
        {
          cd_medico: 1,
          cd_paciente:1,
          ds_atendimento: "Gonorréia",
          tipo_atendimento: "Urgencia"
        },
        {
          cd_medico: 2,
          cd_paciente:2,
          ds_atendimento: "AIDS",
          tipo_atendimento: "Urgencia"
        },
        {
          cd_medico:3,
          cd_paciente:3,
          ds_atendimento: "Fimose",
          tipo_atendimento: "Internação"
        },
      ]);
    });
};
