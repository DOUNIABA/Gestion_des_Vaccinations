
const Appointment = require('../models/appointment')
const User = require('../models/user')
const Vaccin = require('../models/vaccin')

const GetAllAppointments= async(req,res)=>{
    const Appointments= await Appointment.find()
    .populate([
        {
            path: 'user',
            model: User,
        },
        {
            path: 'vaccin',
            model: Vaccin
        }
    ])
     res.send(Appointments)
}

const AddAppointments = async (req,res) => {
    const {body}=req
    if (!body) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
      }
      const appointment = await Appointment.create({...body})
      if(!appointment) return res.json({ message: 'les rendez-vous ne sont pas créés.'})
      res.send('done')
}

const Updatestatus= async (req,res)=>{
    const {id}=req.body
    const appointments = await Appointment.findOne({_id:id})
    if(appointments.status==="depending"){ 
    await Appointment.findOneAndUpdate({_id : id},{status:"confirmé"}) 
      res.json({msg:'status updated'})
      }
      else{
        res.json({msg:'not updated'})
      }
   }
module.exports= {GetAllAppointments,AddAppointments,Updatestatus}
