import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../App.css";

const style={width:"auto"}

 const Appointdisplays = ()=> {
    const [Data,setData]=useState([])

    const data = async ()=>{
      const appoints = await axios.get('http://localhost:8080/api/appoint/GetAllapp')
      setData(appoints.data)
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
            Les appoints <hr className="my-2 p-0" />
            </h2>

            <Link to="/session/addSession"><button type='submit' className="b" style={style}>Ajouter un rendez-vous</button></Link>   
            
            <table className="table table-bordered">
              <tr className="text-black">
                <th>Nom d'Employé</th>
                <th>Formation</th>
                <th>Organisme</th>
              </tr>

              {/* {Data.map((e) => ( */}
              <tbody>
                <tr>
                  {/* {console.log(e)}
                  <td>{e.employe?.name}</td>
                  <td>{e.formation?.formation}</td>
                  <td>{e.organisme?.name}</td>
                  <td>
                  </td> */}
                </tr>
              </tbody>
                {/* ))} */}

            </table>
          </div>
      
        
        </div>
      </div>
    </div>
  )
}

export default Sessiondisplays