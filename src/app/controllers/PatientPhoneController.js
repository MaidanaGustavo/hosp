const PatientsPhonesRepository = require('../repositories/PatientsPhonesRepository')

class PatientPhoneController{

  async index(req,res){
    // Listar todos os registros
    const phonesAndNames = await PatientsPhonesRepository.findAll()
    return res.status(200).json(phonesAndNames)
  }
  async show(req,res){
    const {patient_id} = req.params
    const patientPhoneExists = await PatientsPhonesRepository.findById(patient_id)
    if( !patientPhoneExists ) return res.status(404).json({ error : 'Patient not found!'})
    const patientPhones = await PatientsPhonesRepository.findAllByID(patient_id)
    return res.status(200).json({patientPhones})
  }
  async save(req,res){
    const {patient_id,phone_number,type} = req.body
    if( !patient_id || !phone_number ) return res.status(400).json({error : "Required Fields are missing!"})

    const patientAndNumberExists = await PatientsPhonesRepository.findAllByID(patient_id)


    const checkNumber = patientAndNumberExists.find((number) => number.phone_number === phone_number)

    if( patientAndNumberExists &&  checkNumber)
    return res.status(404).json({error : ' Patient phone number already exists!'})



    const newPatientPhone = await PatientsPhonesRepository.create(patient_id,phone_number,type)
    return res.status(201).json(newPatientPhone)
  }
  async update(req,res){
    const {patient_id,old_phone_number} = req.params
    const {phone_number,type} = req.body
    if( !patient_id || !phone_number ) return res.status(400).json({error : "Required Fields are missing!"})

    const [checkNumber] = patientAndNumberExists.map(function(item){
      if(item.phone_number === phone_number) return 1
    })

    if( patientAndNumberExists &&  checkNumber)
    return res.status(404).json({error : ' Patient phone number already exists!'})

    const updatedPatientPhone = await PatientsPhonesRepository.update(patient_id,old_phone_number,phone_number,type)
    return res.status(200).json(updatedPatientPhone)
  }

  async delete(req,res){
    const {phone_number} = req.params
    await PatientsPhonesRepository.delete(phone_number)
    return res.sendStatus(204)
  }
}

module.exports = new PatientPhoneController()
