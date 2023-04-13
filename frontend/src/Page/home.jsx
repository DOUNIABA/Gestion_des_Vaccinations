
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";import "bootstrap/dist/css/bootstrap.min.css"
import toastr from 'toastr'
import 'toastr/build/toastr.css'
import img from '../assets/image/vaccination.jpg'

function Home() {
  const [vaccin,setVaccin] = useState([])
  const [formData, setformData] = useState([]);

  const getVaccin = async ()=>{
    const vaccins = await axios.get('http://localhost:8080/api/vaccin/GetAllvaccin')
    setVaccin(vaccins.data)
    console.log(vaccins.data)
  };
  useEffect(()=>{
    getVaccin();
},[])

const onChange = (e) => {
  setformData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const vaccin = await axios.post(
    `http://localhost:8080/api/vaccin/NewVaccin`,
    formData
  );
  if (vaccin.data) alert("Votre rendez-vous a été bien enregistré") 
  window.location.reload(false);;
  console.log("not add");
};
    const style={width:"90%",height:"50vh"}

  return (

    <div>
        <div className=' me-5 mt-5'>
        <div className='d-flex justify-content-between ms-5 '>
        <div className='w-100 mt-5'>
        <img style={style} src={img}></img>
        </div>
             <form className="w-50 form shadow " onSubmit={handleSubmit}>
             <h4>Veuillez prendre votre rendez-vous ici!</h4>
        <div className="col-md-12">
            <label>Date</label>
            <input
            type="Date"
            name="Date"
            className="form-control"
            placeholder="Date "
            required
            />
        </div>

        <div className="col-md-12">
          <label>Vaccin</label>
          <select
            className="form-select"
            name="vaccin"
            aria-label="Default select example"
            onChange={onChange}
          >
            <option>none</option>
            {vaccin.map((e) => (
              <option value={e._id}>{e.vaccin}</option>
            ))}
          </select>
        </div>

        <div className="mb-3"> 
      <label htmlFor='floatingEmail'>Phone</label>
          <input className="form-control" 
          type='number' 
          name='num_tel'
          onChange={onChange} 
          placeholder='Phone' 
 />
        </div>

        <div className="mb-3"> 
      <label htmlFor='floatingEmail'>Date de naissance</label>
          <input className="form-control" 
          type='Date' 
          name='date_naiss'
          onChange={onChange} 
          placeholder='Date de naissance' 
 />
        </div>

        <div className="mb-3"> 
      <label htmlFor='floatingEmail'>Adresse</label>
          <input className="form-control" 
          type='text' 
          name='adresse'
          onChange={onChange} 
          placeholder='Adresse' 
 />
        </div>

        <button
            type="submit"
            data-testid="submit"
            className="button1"
            >Save</button>
        </form>  
        </div>
         
    </div>
  
    </div>
  )
}

export default Home
