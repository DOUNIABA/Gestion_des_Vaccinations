
const router = require('express').Router()
const vaccin = require('../../controllers/VaccinController')

router.get('/vaccin/GetAllvaccin',vaccin.GetAllVaccins)
router.post('/vaccin/addVaccin',vaccin.AddVaccin)

module.exports= router
