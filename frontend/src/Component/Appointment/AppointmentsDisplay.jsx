import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css"

 const AppointDisplay = ()=> {
    const [Data,setData]=useState([])

    const data = async ()=>{
      const appoints = await axios.get('http://localhost:8080/api/appoint/GetAllapp')
      setData(appoints.data)
    };
    useEffect(()=>{
      data();
  },[])

  const updateStatus= async (e)=>{
    const id= e.target.value
    const status = await axios.post('http://localhost:8080/api/appoint/Updatestatus',{id})
    if( status.data)
    console.log(data)
    window.location.reload(false);
  }


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
            Les rendez-vous Enregistrés <hr className="my-2 p-0" />
            </h2>            
            <table className="table table-striped table-hover">
              <tr className="text-black">
                <th>patient</th>
                <th></th>
                <th>type vaccin</th>
                <th>Date</th>
                <th>Heure</th>
                <th>Status</th>
              </tr>
              {Data.map((e) => (
              <tbody>
                <tr>
                  {console.log(e)}
                  <td>{e.user?.name}</td>
                  <td>{e.user?.prenom}</td>
                  <td>{e.vaccin?.vaccin}</td>
                  <td>{e.Date}</td>
                  <td>{e.heure}</td>
                  <td>
                  <div class="d-grid gap-3 d-md-flex justify-content-md-end">
                      <button class="btn btn-success" type="submit" onClick={updateStatus}>{e.status}</button>
                      <button class="btn btn-danger" type="submit" >Annuler</button>
                    </div>
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

export default AppointDisplay