
const router = require('express').Router()
const User = require('../../controllers/UserController')


router.post('/User/GetAllusers',User.GetAllUsers)


module.exports= router
