const User=require('../models/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv = require("dotenv")
const localstorage=require('local-storage')
const confirmation =require('../router/middelwares/verify_email')

const signup =  async (req,res)=>{
    const {body}=req
    localstorage('email',body.email)
    confirmation.main()
    const user= await User.findOne({email:body.email})
    if(user) throw Error('user exist already')
    const salt = await bcrypt.genSalt(10);
    const pass= await bcrypt.hash(body.password,salt)
    body.password=pass
    const creat= await User.create({...body})
    if(!creat) throw Error('user not created')
    res.json({msg:"created",
        data:creat
    })
}

const signin = async (req,res)=>{
   const {body}=req
  
   const email = await User.findOne({email:body.email})
   if(!email) throw Error('email not found')
   if(email.confirmation!=true || email.baned!=false) throw Error('anactivated or baned account')

   const password=await bcrypt.compare(body.password,email.password)
   if(!password) throw Error('password not valid')

   const token=await jwt.sign({email},process.env.SECRET)
   if(!token) throw Error('token not generated')

   localstorage('token',token);
   const tokenverif= await jwt.verify(localstorage('token'),process.env.SECRET)
   if(!tokenverif) throw Error('token not valid')
   res.json({
    msg:"logedin",
    token:localstorage('token'),
    data:email
   })
       
}

const Logout = async (req, res) => {
    localstorage.clear();
    res.send("Logout");
  };

module.exports={signin,signup,Logout}
