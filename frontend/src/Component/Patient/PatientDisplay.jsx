import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css"

const style={width:"auto"}

 const PatientDisplay = ()=> {
    const [Data,setData]=useState([])

    const data = async ()=>{
      const patients = await axios.get('http://localhost:8080/api/user/User/GetAllusers')
      setData(patients.data)
    };
    useEffect(()=>{
      data();
  },[])
   console.log(Data)
  return (
    <div className="bg-gray-300 h-screen flex-col">
      <div>
      </div>
      <div className="flex  ">
        <div className="lg:block">
        </div>
        <div className="m-3 w-100">
          <div>

          </div>
          <div className=" container my-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
            Les Patients <hr className="my-2 p-0" />
            </h2>

            {/* <Link to="/session/addSession"><button  type='submit' className="button1" style={style}>Ajouter un rendez-vous</button></Link>    */}
            
            <table className="table table-striped table-hover">
              <tr className="text-black">
                <th>patient</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Status</th>

              </tr>

              {Data.map((e) => (
              <tbody>
                <tr>
                  {console.log(e)}
                  <td>{e.name}</td>
                  <td>{e.prenom}</td>
                  <td>{e.email}</td>
                 
                  <td>
                    <button className='button1'>banner</button>
                  </td>
                  <td>
                  </td>
                </tr>
              </tbody>
                ))} 

            </table>
          </div>
      
        
        </div>
      </div>
    </div>
  )
}

export default PatientDisplay