const {Router} = require('express')
const router = Router()
const PatientRoutes = require('./routes/PatientRoutes')
const PatientPhonesRoute = require('./routes/PatientPhonesRoute')

router.use(PatientRoutes)
router.use(PatientPhonesRoute)
module.exports = router
