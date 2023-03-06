// import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from "./Page/login";
import Register from "./Page/Register"
function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={< Login />} />
      <Route path="/Register" element={<Register />}/>
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;

