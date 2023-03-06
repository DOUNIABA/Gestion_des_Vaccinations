const Vaccin= require('../models/vaccin')


const GetAllVaccins= async(req,res)=>{
    const Vaccins= await Vaccin.find()
     res.json(Vaccins)
}




module.exports= {GetAllVaccins}