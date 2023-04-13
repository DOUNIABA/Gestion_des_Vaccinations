const errorHandler = (error, req, res, next)=>{
    return res.json({error:error.message})
 
 }
 module.exports = errorHandler();