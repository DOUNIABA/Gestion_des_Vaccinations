const mongoose=require('mongoose')
require('dotenv').config()

DB=process.env.DB_DATABASE

mongoose.connect(DB,{useNewUrlParser: true })
.then(res=>console.log('connection succ'))
.catch((err => console.log(err)))

