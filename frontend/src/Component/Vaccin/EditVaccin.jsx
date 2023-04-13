import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../SideBar";
function EditVaccin() {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);

  const { id } = useParams();
  
  const data = async () => {
    const vaccin = await axios.get(`http://localhost:8080/api/vaccin/GetOneVaccin/${id}`);
    setData(vaccin.data);
  };
  useEffect(() => {
    data();
  }, []);
  console.log(Data)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vaccin = await axios.put(`http://localhost:8080/api/vaccin/EditVaccin/${id}`,Data);
    if (vaccin) navigate('/AllVaccin')
    console.log("not modifiee");
  };

  const onChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  return (
    <div className=' w-100 '> 
    <div className="d-flex  "> 
        <SideBar />
    <form className="form-container shadow " onSubmit={handleSubmit} >
      <div className="col-md-12">
        <h5>Modification</h5>
          <span>Vaccin</span>
          <input
          type="text"
          name="vaccin"
          className="form-control"
          required
          onChange={onChange}
          value={Data.vaccin}
          />
      </div>
      <div className="col-md-12">
          <span>Adresse</span>
          <input
          type="text"
          name="description"
          className="form-control"
          required
          onChange={onChange}
          value={Data.description}
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
  );
}

export default EditVaccin;