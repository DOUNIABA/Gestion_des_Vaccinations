
const jwt = require('jsonwebtoken')
const local_storage =require('local-storage')

function verify(){   
    return(req,res,next)=>{
        if(local_storage('token')){   
            if(jwt.verify(local_storage('token'),process.env.SECRET))
            {  
                next();
            }
        }else{
                 res.status(400).send('unauthenticated')
        }
    }
    
}

module.exports={verify}