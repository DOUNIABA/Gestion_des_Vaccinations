
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from "./Page/login";
import Register from "./Page/Register"
import Home from "./Page/home"
import PageErreur from "./Page/pageError"
import Dashboard from "./Page/dashboard";
import Logout from "./Page/Logout";
import ProtectRoute from "./ProtectRoutes/ProtectRoute.js";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>  
    <Route path="/" element={< Login />} />
    <Route path="/Register" element={<Register />}/>
    <Route element={<ProtectRoute/>}>
      <Route path='/logout' element={<Logout/>} />  
      <Route path="/home" element={<Home />}/>
      <Route path="/Dashboard" element={<Dashboard />}/>
      <Route path="*" element={<PageErreur />} />
    </Route>
    </Routes>
    
    </BrowserRouter>
  );
}
export default App;
