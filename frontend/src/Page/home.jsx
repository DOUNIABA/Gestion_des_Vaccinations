
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";import "bootstrap/dist/css/bootstrap.min.css"
import toastr from 'toastr'
import 'toastr/build/toastr.css'

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

  return (
    <div>
        <div className=' me-5 mt-5'>
        <div className='d-flex justify-content-between ms-5 '>
        
        <div className='w-100 mt-5'>
        <img src=''></img>
    </div>
             <form className="w-50 form shadow " onSubmit={handleSubmit}>
             <p>Veuillez prendre votre rendez-vous ici!</p>
        <div className="col-md-12">
            <span>Date</span>
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
