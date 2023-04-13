import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from '../SideBar';

const  AddEmploye=()=> {
    const Navigate=useNavigate()
 
    const [formData,SetformData]=useState([])

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const vaccin=await axios.post('http://localhost:8080/api/vaccin//NewVaccin',formData)
        if(vaccin.data) Navigate('/AllVaccin')
    }

    const onChange = (e) => {
        SetformData({...formData, [e.target.name]: e.target.value });
      };

  return (
    <div className=' w-100 '> 
  
  <div className="d-flex  "> 
      <SideBar />
            
    <form className=" form-container shadow  " onSubmit={handleSubmit} >
        <div className="col-md-12">
            <span>Vaccin</span>
            <input
            type="text"
            name="vaccin"
            className="form-control"
            placeholder="Vaccin "
            required
            onChange={onChange}
            />
        </div>
        <div className="col-md-12">
            <span>Description</span>
            <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Description"
            required
            onChange={onChange}
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
  )
}

export default AddEmploye