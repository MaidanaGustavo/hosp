
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('paciente').del()
    .then(function () {
      // Inserts seed entries
      return knex('paciente').insert([
       {
         nome: "Sasuke Uchiha",
         cpf: "5879624566",
         endereco: "Vila dos Uchihas 778",
         telefone:"789996685",
         datanasc: "03/07/2000",
         nome_mae: "Mikoto Uchiha "
       },
       {
        nome: "Eren Yeager",
        cpf: "1478596325",
        endereco: "Distrino de Shiganshina 878",
        telefone:"7789996625",
        datanasc: "07/01/835",
        nome_mae: "Carla Yeager"
      },
      {
        nome: "Gordon Freeman",
        cpf: "888558869",
        endereco: "Seattle 122",
        telefone:"8799665",
        datanasc: "11/09/1982",
        nome_mae: "Greg Coomer"
      }
      ]);
    });
};
