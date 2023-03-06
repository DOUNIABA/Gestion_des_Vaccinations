const Appointment= require('../models/appointment')


const GetAllAppointments= async(req,res)=>{
    const Appointments= await Appointment.find()
     res.json(Appointments)
}



module.exports= {GetAllAppointments}