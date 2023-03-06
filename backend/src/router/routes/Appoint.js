
const router = require('express').Router()
const appoint = require('../../controllers/AppointmentController')


router.post('/apponitment/GetAllapp',appoint.GetAllAppointments)


module.exports= router
