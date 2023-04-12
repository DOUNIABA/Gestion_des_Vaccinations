
const mongoose=require('mongoose')
const Userschema= new mongoose.Schema({
    name:{
        type:String,
    },
    prenom:{
        type:String,
        
    },
    date_naiss:{
        type:String,
        
    },
    email:{
        type:String,
      
    },
    num_tel:{
        type:String,
        
    },
    adresse:{
        type:String,
        
    },
    role:{
        type:String,
        default:'patient'
       
    },
    password:{
        type:String,
       
    },
    baned:{
        type:Boolean,
        default:false
    },
    confirmation:{
        type:Boolean,
        default:false
    }
})
 const User= mongoose.model('user',Userschema)
module.exports= User
