import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  
    const navigate=useNavigate()
    const [error,seterror]=useState([])
    const [msg,setmsg]=useState(false)
    const [Data, setData] = useState({email: '', password: '',})
    const [sucess, setSucess] = useState("");
    const [role, setRole] = useState("");
    const {email, password}=Data

    const handleSubmit = (e)=>{	
      e.preventDefault();
      // console.log(Data);
      axios.post(`http://localhost:8080/api/auth/login`, Data)
      .then(res=>{
        localStorage.setItem("token",res.data)
        setData("");
        setSucess(true);
        setRole(res.data.data.role)
       
      })
      .catch(error =>{
        console.log(error) 
      })
    }

  useEffect(() => {
		if(sucess){
      console.log(sucess)
	   if(role === "patient"){
      console.log(role)
		   navigate("/home") 
		  } 
		  if (role === "manager"){
			navigate("/Dashboard") 
		   }
    }
	   else (console.log('err') )
	},[Data]);

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
          id='email'
          type="email"
          name="email"
          value={email}
          className="form-control"
          placeholder="Enter email"
          onChange={onChange}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
        id='password'
          type="password"
          name="password"
          value={password}
          className="form-control"
          placeholder="Enter password"
          onChange={onChange}
        />
      </div>

      <div className="form-group">
				<button type='submit' className='btn btn-block'>Submit</button>
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
