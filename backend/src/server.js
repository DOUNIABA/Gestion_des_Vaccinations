
const express=require('express')
const app=express()
const db=require('./config/db')
const cors=require('cors')
const auth =require('./router/routes/Auth')
const user = require('./router/routes/User')
const vaccin = require('./router/routes/Vaccin')
const stock = require('./router/routes/Stock')
const appoint = require('./router/routes/Appoint')

app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/auth',auth)
app.use('/api/user',user)
app.use('/api/vaccin',vaccin)
app.use('/api/stock',stock)
app.use('/api/appoint',appoint)

app.listen(8080);

module.exports= app