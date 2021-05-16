const knex   = require('./index')
const medicines = {
    name : 'teste2',
    frequency : 'tessd',
    schedule : '8h'
}
async function test(){
  const result = await knex('patients_phones').join('patients','patients_phones.patient_id','=','patients.id')
                  .where({phone_number:'67991329246'}).select('patients.name','patients_phones.phone_number')
  console.log(result)
}
test()
