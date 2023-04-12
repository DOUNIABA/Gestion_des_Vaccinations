
const router = require('express').Router()
const vaccin = require('../../controllers/VaccinController')

router.get('/GetAllvaccin',vaccin.GetAllVaccin)
router.post('/NewVaccin',vaccin.CreateVaccin)
router.put('/EditVaccin/:id',vaccin.UpdateVaccin)
router.delete('/removeVaccin/:id',vaccin.DeleteVaccin)
router.get('/GetOneVaccin/:id',vaccin.getVaccin)

module.exports= router
