const User= require('../models/user')


const GetAllUsers= async(req,res)=>{
    const Users= await User.find()
     res.json(Users)
}


const Ban = async (req,res)=>{
    res.json({banned})
}

module.exports= {GetAllUsers,Ban}