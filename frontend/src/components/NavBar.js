import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="list">
        <li className="li-item">
          <Link to="/">Home</Link>
        </li>
        <li className="li-item">
          <Link to="/Signup">Signup</Link>
        </li>
        <li className="li-item">
          <Link to="/Signin">Signin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
