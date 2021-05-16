const knex = require('../../database/index')

class PatientsPhonesRepository{

  async findAll(){
    const result = await knex('patients_phones').join('patients','patients_phones.patient_id','=','patients.id')
                  .select('patients.name','patients_phones.phone_number','patients.id')
    return result
  }
  async findById(patient_id){
    const [result] = await knex('patients_phones').where({patient_id}).select('*')
    return result
  }
  async findAllByID(patient_id){
    const result = await knex('patients_phones').where({patient_id}).select('phone_number')
    return result
  }
  async create(patient_id,phone_number,type){
    const [result] = await knex('patients_phones').returning('*').insert({patient_id,phone_number,type})
    return result
  }
  async update(patient_id,old_phone_number,phone_number,type){
    console.log(phone_number)
    const [result] = await knex('patients_phones').returning('*').where({patient_id,phone_number:old_phone_number}).update({phone_number,type})
    return result
  }
  async delete(phone_number){
    const result = await knex('patients_phones').where({phone_number}).del()
    return result
  }

}
module.exports =  new PatientsPhonesRepository()
