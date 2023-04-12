
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
      ( <button  onClick={logout} className="fw-50 btn text-light h-25 ">log out</button>):
      ( <a href='' className="btn h-25 text-center text-black p-0 m-0 hover">Login</a >)}
   
   </div>
  )
}
export default Logout