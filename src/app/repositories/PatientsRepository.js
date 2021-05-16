const knex = require('../../database/index')

class PatientsRepository {
  async  findAll(){
    const result = await knex.select().table('patients')
    return result
  }

  async findById(id){
    const [result] = await knex('patients').where({id})
    return result
  }
  async findByCpf(cpf){
    const [result] = await knex('patients').where({cpf})
    return result
  }

  async create(patient){
    const [result]  = await knex('patients').returning('*').insert(patient)
    return result
  }
  async update(id,patient){
    const [result] = await knex('patients').returning('*').where({id}).update(patient)
    return result
  }

  async delete(id){
    const result = await knex('patients').where(id).del()
    return result
  }
}


module.exports = new PatientsRepository();
