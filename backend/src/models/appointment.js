
const mongoose = require('mongoose')

const Appointmentschema= new mongoose.Schema({
    Date:{
        type:Date,
    },
    status:{
        type:String,
        default:'depending'
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
