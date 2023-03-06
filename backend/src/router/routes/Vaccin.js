
const router = require('express').Router()
const vaccin = require('../../controllers/VaccinController')


router.post('/vaccin/GetAllvaccin',vaccin.GetAllVaccins)


module.exports= router
