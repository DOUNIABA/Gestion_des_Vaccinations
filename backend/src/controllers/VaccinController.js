
const Vaccin= require('../models/vaccin')

const GetAllVaccins= async(req,res)=>{
    const Vaccins= await Vaccin.find()
     res.json(Vaccins)
}

const AddVaccin = async (req,res)=>{
    const {body}=req
    const vaccins= await Vaccin.create({...body})
    if(!vaccins) res.json({message:"not created"})
    res.json({message:'created'})
}

module.exports= {GetAllVaccins,AddVaccin}
