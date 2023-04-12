import React from 'react'
import { useEffect,useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import axios from 'axios'
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css"

const style={width:"auto"}

 const AllVaccin = ()=> {
    const [Data,setData]=useState([])

    const data = async ()=>{
      const vaccins = await axios.get('http://localhost:8080/api/vaccin/GetAllvaccin')
      setData(vaccins.data)
    };
    useEffect(()=>{
      data();
  },[])

  const remove = async (e) => {
    e.preventDefault();
    const vaccins = await axios.delete("http://localhost:8080/api/vaccin/removeVaccin",{ id: e.target.value });
    if (vaccins.data) alert("voulez vous vraiment le supprimer") 
    window.location.reload(false);
  };

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
            Les Vaccins exitants <hr className="my-2 p-0" />
            </h2>

            <Link to="/NewVaccin"><button  type='submit' className="button1" style={style}>Nouveau vaccin</button></Link>   
            
            <table className="table table-striped table-hover">
              <tr className="text-black">
                <th>Type Vaccin</th>
                <th>Description</th>
                

              </tr>

              {Data.map((e) => (
              <tbody>
                <tr>
                  {console.log(e)}
                  <td>{e.vaccin}</td>
                  <td>{e.description}</td>
                 
                  <td>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <NavLink to={`/EditVaccin/${e._id}`}><button class="btn btn-info me-md-2" type="button">Modifier</button></NavLink>
                      <button class="btn btn-danger" type="submit" onClick={remove}>Supprimer</button>
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

export default AllVaccin