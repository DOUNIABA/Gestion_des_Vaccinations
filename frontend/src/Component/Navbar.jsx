// import {Link } from "react-router-dom";
// import Logout from "../Page/Logout";
// // import "../App.css";

// const Navbar = () => {
// // setValue(localStorage.getItem("name"))

//   return (
//     <div className="">
//      <nav class="navbar ">
//   <div class="container-fluid">
//     <a class="navbar-brand">Navbar</a>
//     <form class="d-flex">
//       <button class=" btn-outline-success" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
//     </div>
//   );
// };

// export default Navbar;

import {Link } from "react-router-dom";
import Logout from "../Page/Logout";
// import "../App.css";
// import SideBar from "./SideBar";

const Navbar = () => {

  return (
    <div className="">
     <nav class="navbar navbar-light bg-black">
  <div class="container-fluid">
    <a class="navbar-brand text-light">MeVaccins</a>
    <div className="d-flex">
        <Logout />
    </div>
  </div>
</nav>
      <div className="d-flex justify-content-start">
      </div>
    </div>
  );
};

export default Navbar;