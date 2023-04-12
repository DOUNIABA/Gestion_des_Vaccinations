import {Link} from "react-router-dom";
import './sidebar.css'

const SideBar = () => {
    return (
       <div className="sidebox d-flex flex-column justify-content-around align-items-start py-5">
          <Link to=""  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-house-fill"></i>Home</Link>
          <Link to="/PatientDisplay" className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-people-fill"></i> Patients</Link>
          <Link to="/AllVaccin"  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-journal-text"></i> Vaccins </Link>
          <Link to="/AllAppoints"  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-egg-fried"></i> Rendez-vous</Link>

       </div>
    );
  };
  
  export default SideBar;
  