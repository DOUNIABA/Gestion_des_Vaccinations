const Vaccin=require  ("../models/vaccin");

const GetAllVaccin= async (req,res)=>{
    const vaccin= await Vaccin.find()
    res.json(vaccin)
}

const CreateVaccin=(req,res)=>{
    const {body}=req
    const vaccin= Vaccin.create({...body})
    if(!vaccin) res.json({msg:"not created"})
    res.json({vaccin})
}

const getVaccin= async (req,res)=>{
    const {id}= req.params
   const vaccin= await Vaccin.findOne({_id:id})
   res.send(vaccin)
  }

const UpdateVaccin= async (req,res)=>{
    const id = req.params.id
    const {body}=req
    const vaccin= await Vaccin.updateOne({_id:id},{...body})
    if(vaccin) res.status(200).send('updated')
    else res.status(400).send('not updated')
}

const DeleteVaccin=async (req,res)=>{
    const id =req.params.id
    const vaccin= await Vaccin.deleteOne({id})
    if(vaccin)
    res.status(200).send("deleted")
    else  res.status(404).send("deleted")
}


module.exports={GetAllVaccin,CreateVaccin,getVaccin,UpdateVaccin,DeleteVaccin}