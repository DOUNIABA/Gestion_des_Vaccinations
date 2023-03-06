
const router = require('express').Router()
const user = require('../../controllers/UserController')
const auth = require('../../controllers/AuthController')

router.post('/login',auth.signin)
router.post('/register',auth.signup)
router.get('/logout',auth.Logout)

module.exports= router
