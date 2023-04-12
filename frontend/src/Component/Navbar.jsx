import {Link } from "react-router-dom";
import Logout from "../Page/Logout";
import "../App.css";

const Navbar = () => {
// setValue(localStorage.getItem("name"))

  return (
    <div className="auth">
      <nav className="Navbar w-50">
        <div className="container-fluid d-flex align-items-center text-light">
          Formations Continues
                      <Logout />

          {/* <div className="w-25 d-flex justify-content-around align-items-center"> */}
            {/* <Link to="" className="btn text-white hover">
            </Link> */}
          {/* </div> */}
        </div>
      </nav>
      <div className="d-flex justify-content-start">
      </div>
    </div>
  );
};

export default Navbar;