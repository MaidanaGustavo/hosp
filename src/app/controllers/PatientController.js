const PatientsRepository = require('../repositories/PatientsRepository')

class PatientController{

  async index (req,res){
    // Listar todos os registros
    const patients = await PatientsRepository.findAll()
    res.status(200).json(patients)
  }
  async show(req,res){
    // Obter um registro
    const {cpf} = req.params
    const patient = await PatientsRepository.findByCpf(cpf)
    if(!patient) return res.status(404).json({ error : 'Patient not found!'})
    return res.status(200).json(patient)
  }

 async save(req,res){
    // Criar novo paciente
    const {
        name,birth_date,cpf,rg,
        gender,street,district,housenumber,
        zip_code,city,state,country,
        mother_name,occupation,marital_status,
        ethnicity,email
      } = req.body
      if( !name || !birth_date || !cpf || !rg || !mother_name)
      return res.status(400).json({error : ' Required fields are missing!'})

      const patientExists = await PatientsRepository.findByCpf(cpf)

      if(patientExists) return res.status(400).json({error : 'CPF already registred'})

      const newPatient = await PatientsRepository.create({
        name,birth_date,cpf,rg,
        gender,street,district,housenumber,
        zip_code,city,state,country,
        mother_name,occupation,marital_status,
        ethnicity,email
      })
      return res.status(201).json(newPatient)
  }

  async update(req,res){
    const {cpf} = req.params
    const { name,birth_date,rg,
      gender,street,district,housenumber,
      zip_code,city,state,country,
      mother_name,occupation,marital_status,
      ethnicity,email} = req.body

    if( !name || !birth_date || !cpf || !rg || !mother_name)
    return res.status(400).json({error : ' Required fields are missing!'})

    const patientExists  = await PatientsRepository.findByCpf(cpf)

    if(!patientExists) return res.status(404).json({error : 'Patient not found !'})
    const {id} = patientExists

    const updatedPatient = await PatientsRepository.update(id,{ name,birth_date,cpf,rg,
      gender,street,district,housenumber,
      zip_code,city,state,country,
      mother_name,occupation,marital_status,
      ethnicity,email})
    return res.status(200).json(updatedPatient)
  }

  async delete(req,res){
    const {cpf} = req.params
    const patientExists = await PatientsRepository.findByCpf(cpf)
    if(! patientExists) return res.status(404).json({error : 'Patient not found !'})
    const {id} = patientExists
    await PatientsRepository.delete({id})
    return res.sendStatus(204)
  }
}

module.exports = new PatientController()
