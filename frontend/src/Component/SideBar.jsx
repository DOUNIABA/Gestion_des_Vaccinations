import {Link} from "react-router-dom";
import './sidebar.css'

const SideBar = () => {
    return (
       <div className="sidebox d-flex flex-column justify-content-around align-items-start py-5">
          <Link to=""  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-house-fill"></i>Home</Link>
          <Link to="/employe/list" className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-people-fill"></i> Employés</Link>
          <Link to="/fomation/list"  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-journal-text"></i> Formations </Link>
          <Link to="/organisme/list"  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-egg-fried"></i> Organismes</Link>
          <Link to="/session/list"  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-credit-card-fill"></i> Sessions</Link>

       </div>
    );
  };
  
  export default SideBar;
  