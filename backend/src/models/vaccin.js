
const mongoose=require('mongoose')
const Vaccinschema= new mongoose.Schema({
    vaccin:{
        type:String,
        
    },
    description:{
        type:String,
      
    },
})
 const Vaccin= mongoose.model('vaccin',Vaccinschema)
module.exports= Vaccin
