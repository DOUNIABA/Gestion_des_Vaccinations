
const mongoose = require('mongoose')

const Appointmentschema= new mongoose.Schema({
 
    Date:{
        type:Date,
      
    },
    heure:{
        type:String,
       
    },
    status:{
        type:String,
    },
    vaccin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Vaccin'
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
})
 const Appointment= mongoose.model('appointment',Appointmentschema)
module.exports= Appointment
