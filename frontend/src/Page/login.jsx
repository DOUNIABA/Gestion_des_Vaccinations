import React from 'react'
import colors from '../assets/styles/colors'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  
  const navigate=useNavigate()
  const [error,seterror]=useState(false)
  const [msg,setmsg]=useState(false)
  const [Data, setData] = useState({});

  const handleSubmit = async (e)=>{	
   e.preventDefault()
     console.log(Data)
     try{
  const user = await axios.post(`http://localhost:8000/api/auth/login`, Data)
    if(user.data){
          localStorage.setItem("token",user.data.token)
          localStorage.setItem("name",user.data.name)
          navigate('/home')
          }
  }catch(error){
    seterror(error.message) 
  }
}

const onChange = (e) => {
  setData({...Data, [e.target.name]: e.target.value });
};
  return (
    <div className="App auth fill">
      <form className='justify-content-center' onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={onChange}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          onChange={onChange}
        />
      </div>

      <div className="d-grid">
      <button
            type="submit"
            data-testid="submit"
            className=""
            >Save</button>
      </div>

      <div className="d-flex align-items-center justify-content-between ">
 
          <Link to="/Register"  className="btn text-secondary fw-bold fs-6 text-decoration-none" >Sign-in?</Link>
          <Link to=""  className="btn text-secondary fw-bold fs-6" >Forget ur password ?</Link>

        </div>
    
    </form>
    </div>
  )
}

export default Login
