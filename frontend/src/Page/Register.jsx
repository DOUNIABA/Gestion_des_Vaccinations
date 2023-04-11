import React from 'react'
import { Link } from 'react-router-dom'
import colors from '../assets/styles/colors'
import { useState } from 'react'
import toastr from 'toastr'
import 'toastr/build/toastr.css'
import axios from 'axios'

function Register() {
  const [Data, setData] = useState({});
  
	const onChange = (e) =>{
		setData((prevState) => ({
			...prevState,
			[e.target.name]:e.target.value,
		}))
	}

	const handleApi = (e)=>{
		e.preventDefault();
		axios.post(`http://localhost:8000/api/auth/register`, Data)
		.then(res =>{
			toastr.success(res.data, {positionClass: "toast-bottom-left"})})
		.catch(error =>{
			console.log(error)
		})
	}


  return (
    <div className="App auth fill">
      <form className='justify-content-center' onSubmit={handleApi}>
      <h1>Register</h1>
      <div className="form-floating text-muted col-10"> 
      <label htmlFor='floatingEmail'>Username</label>
          <input className="form-control" 
          type='text' 
          name='name'
          onChange={onChange} 
          placeholder='Username' 
          style={{ background: colors.white }} />
        </div>

        <div className="form-floating text-muted col-10"> 
        <label htmlFor='floatingEmail'>Email</label>
          <input className="form-control" 
          type='email' 
          name='email'   
          onChange={onChange} 
          placeholder='Email' 
          style={{ background: colors.white }} />
        </div>

     <div className="form-floating text-muted col-10">
        <label htmlFor='floatingEmail'>Password</label>
          <input className="form-control" 
          type='password' 
          onChange={onChange} 
          name="password"
          placeholder='Password' 
          style={{ background: colors.white }} />
        </div>

      <div className="d-grid">
      <button
            type="submit"
            data-testid="submit"
            className=""
            >Save</button>
      </div>
      
      <div className="w-100 d-flex justify-content-between align-items-center  pb-3">
        <Link to="/" className="btn text-secondary fw-bold fs-6 text-decoration-none " >You have already an account?</Link>
        </div>

    </form>
    </div>
  )
}

export default Register
