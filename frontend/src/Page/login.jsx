import React from 'react'
import colors from '../assets/styles/colors'
import { Link } from 'react-router-dom'

function login() {
  
  // const [message, setMessage] = React.useState('')

  return (
    <div className="App auth fill">
      <form className='justify-content-center'>
      <h1>Login</h1>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          // onChange={onChange}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          // onChange={onChange}
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

export default login
