
const router = require('express').Router()
const User = require('../../controllers/UserController')


router.get('/User/GetAllusers',User.GetAllUsers)
router.get('/User/Ban',User.Ban)

module.exports= router
