
const router = require('express').Router()
const user = require('../../controllers/UserController')
const auth = require('../../controllers/AuthController')
const verifemail=require('../middelwares/verify_email')

router.post('/login',auth.signin)
router.post('/register',auth.signup)
router.get('/logout',auth.Logout)
router.get('/confirmation/:email_token',verifemail.confirm)

module.exports= router
