
const router = require('express').Router()
const appoint = require('../../controllers/AppointmentController')


router.get('/GetAllapp',appoint.GetAllAppointments)
router.post('/AddApp',appoint.AddAppointments)
router.post('/Updatestatus',appoint.Updatestatus)

module.exports= router
