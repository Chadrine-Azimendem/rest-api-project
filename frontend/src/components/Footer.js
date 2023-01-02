import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
          <li>
            <Link to="/Signin">Signin</Link>
          </li>
        </ul>
        <p>&copy; Chadrine L. Azimendem 2022</p>
      </div>
    </>
  );
};

export default Footer;
