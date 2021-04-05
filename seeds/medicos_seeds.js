
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('medicos').del()
    .then(function () {
      // Inserts seed entries
      return knex('medicos').insert([
        {
         nome: "Willian Arão",
         crm: "145896",
         datanasc:"12/03/1992",
         sexo: "MASC",
         telefone: "68954239",
         cpf: "78965412358",
         especialidade:"Cardiologista"
        },
        {
          nome: "Carlos Rios",
          crm: "145116",
          datanasc:"06/03/1996",
          sexo: "MASC",
          telefone: "68954259",
          cpf: "78965412314",
          especialidade:"Infectologista"
         },
         {
          nome: "Juliana Caetano",
          crm: "12258",
          datanasc:"05/02/1995",
          sexo: "FEM",
          telefone: "615874699",
          cpf: "1256987432",
          especialidade:"Urologista"
         },
      ]);
    });
};
