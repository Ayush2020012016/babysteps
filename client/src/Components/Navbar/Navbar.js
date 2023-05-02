import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarMasterContainer">
      <div className="navbarContainer">
        <div className="navbarHeader">
          <div className="navbarName">BabySteps</div>
          <div className="navbarItems">
            <div className="navbarItem">Team</div>
            <div className="navbarItem">Our Work</div>
          </div>
        </div>
        <div className="navbarButton">
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
