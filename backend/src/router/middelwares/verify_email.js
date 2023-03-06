const nodemailer = require("nodemailer");
const ls = require("local-storage");

  let transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: process.env.EMAIL, 
      pass:  process.env.PASSWORD, 
    },
  });  
  
     exports.sendEmail = (email,token)=>{
     transporter.sendMail({
      from: "dounia0bahassane@gmail.com", 
      to: email,
      subject: "confirmation email",
      html: "<h3>HELLO </h3><p> Please click here to confirm your email: <a href=http://localhost:8000/api/auth/verify-email/"+token+"> click here </a> ",
    },
    (error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(" send");
        }
    })
  }