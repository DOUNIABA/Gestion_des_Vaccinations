import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import colors from '../assets/styles/colors'
import { useState } from 'react'
import toastr from 'toastr'
import 'toastr/build/toastr.css'
import axios from 'axios'
import '../App.css'

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
		axios.post(`http://localhost:8080/api/auth/register`, Data)
		.then(res =>{
			toastr.success(res.data, {positionClass: "toast-bottom-left"})})
		.catch(error =>{
			console.log(error)
		})
	}

  return (
    <div className="App auth fill">
      <div className='form1 justify-content-center' onSubmit={handleApi}>
      <h1>Register</h1>
      <div className="mb-3"> 
      <label htmlFor='floatingEmail'>First Name</label>
          <input className="form-control" 
          type='text' 
          name='name'
          onChange={onChange} 
          placeholder='First Name' 
          style={{ background: colors.white }} />
        </div>

        <div className="mb-3"> 
      <label htmlFor='floatingEmail'>Last Name</label>
          <input className="form-control" 
          type='text' 
          name='prenom'
          onChange={onChange} 
          placeholder='Last Name' 
          style={{ background: colors.white }} />
        </div>

        <div className="mb-3">
        <label>Email address</label>
        <input
          id='email'
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={onChange}
        />
      </div>

     <div className="mb-3">
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
            className="button1"
            >Save</button>
      </div>
      
      <div className="w-100 d-flex justify-content-between align-items-center  pb-3">
        <Link to="/" className="btn text-secondary fw-bold fs-6 text-decoration-none " >You have already an account?</Link>
        </div>

    </div>
    </div>
  )
}

export default Register
