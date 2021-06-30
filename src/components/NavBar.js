import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/home" exact>
        Home
      </NavLink>
      <NavLink to="/collections" exact>
        My Collections
      </NavLink>
    </div>
  );
};

export default NavBar;
