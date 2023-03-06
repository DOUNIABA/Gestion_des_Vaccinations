
const mongoose=require('mongoose')
const Stockschema= new mongoose.Schema({
    name:{
        type:String, 
    },
    quantité:{
        type:Number,
    },

})
const Stock= mongoose.model('stock',Stockschema)
module.exports= Stock
