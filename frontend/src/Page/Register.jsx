import React from 'react'
import { Link } from 'react-router-dom'
import colors from '../assets/styles/colors'

function login() {
  
  // const [message, setMessage] = React.useState('')

  return (
    <div className="App auth fill">
      <form className='justify-content-center'>
      <h1>Register</h1>
      <div className="form-floating text-muted col-10"> 
      <label htmlFor='floatingEmail'>Username</label>
          <input className="form-control" 
          type='text' 
        //   onChange={onChange} 
        //   id='floatingEmail' 
        //   name='name' 
          placeholder='Username' 
          style={{ background: colors.white }} />
         
        </div>

        <div className="form-floating text-muted col-10"> 
        <label htmlFor='floatingEmail'>Email</label>
          <input className="form-control" 
          type='email' 
        //   onChange={onChange} 
        //   id='floatingEmail' 
        //   name='email' 
          placeholder='Email' 
          style={{ background: colors.white }} />
         
        </div>

     <div className="form-floating text-muted col-10">
        <label htmlFor='floatingEmail'>Password</label>
          <input className="form-control" 
          type='password' 
        //   onChange={onChange} 
        //   id='floatingEmail' 
          name='password' 
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

export default login
