
import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate= useNavigate()

    const logout = async() => {
      const log= await axios.get('http://localhost:8080/api/auth/logout')
      localStorage.removeItem('token')
      localStorage.removeItem('name')
     navigate('/')
    };
  return (
    <div>
      {localStorage.getItem('token')?
      ( <button  onClick={logout} className="  h-25 text-center text-light p-0 m-0 hover">log out</button>):
      ( <button className="  h-25 text-center text-light p-0 m-0 hover"></button>)}
   
   </div>
  )
}
export default Logout