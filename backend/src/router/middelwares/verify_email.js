const nodemailer = require("nodemailer");
const ls=require('local-storage')
const jwt=require('jsonwebtoken')
const User=require('../../models/user')
require('dotenv').config()

function main() {
 
    const email_token=jwt.sign({email:ls('email')},process.env.SECRET)
    const url='http://localhost:8080/api/auth/confirmation/'+email_token;
 
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL, 
      pass:process.env.PASSWORD, 
    },
  });
  let info = {
    from: '"dounia" <'+process.env.EMAIL+'>', 
    to:ls('email'),
    subject: "email verification ✔",  
    html: '<b>Hello we just got a request to create an account with this email, please verify in this link <a href="'+url+'">confirm it</a></b>',
  };
  transporter.sendMail(info)
}

async function confirm(req,res){
  const tkn= await jwt.verify(req.params.email_token,process.env.SECRET)
  req.email=tkn
  const confirmations= await User.findOneAndUpdate({email:req.email.email},{confirmation:true})
  if(!confirmations) return res.send('not comfirmed')
  res.redirect('http://localhost:3000/login')
}
module.exports= {main,confirm}

