
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
module.exports= {GetAllAppointments,AddAppointments}
