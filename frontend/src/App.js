
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from "./Page/login";
import Register from "./Page/Register"
import Home from "./Page/home"
import PageErreur from "./Page/pageError"
import Dashboard from "./Page/dashboard";
import Logout from "./Page/Logout";
import ProtectRoute from "./ProtectRoutes/ProtectRoute.js";
import Navbar from "./Component/Navbar";
import Appointmentsdispalay from "./Component/Appointment/AppointmentsDisplay"
import PatientDisplay from "./Component/Patient/PatientDisplay";
import AllVaccin from "./Component/Vaccin/AllVaccin";
import AddVaccin from "./Component/Vaccin/AddVaccin";
import EditVaccin from "./Component/Vaccin/EditVaccin";
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
      <Route path="/AllAppoints" element={<Appointmentsdispalay />}/>
      <Route path="/PatientDisplay" element={<PatientDisplay />}/>
      <Route path="/AllVaccin" element={<AllVaccin />}/>
      <Route path="/NewVaccin" element={<AddVaccin />}/>
      <Route path="/EditVaccin/:id" element={<EditVaccin />}/>
    
      <Route path="*" element={<PageErreur />} />
    </Route>
    </Routes>
    
    </BrowserRouter>
  );
}
export default App;
