// MenuButton.js
import React from "react";
import "./login.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <Link to="/rules&regulations">
        {" "}
        <button className="btn-login btn-login1">
          <div className="sign sign1">
            <FontAwesomeIcon icon={faClipboard} />
          </div>

          <div className="text text1">Rules</div>
        </button>
      </Link>
      <button className="btn-login btn-login2" onClick={()=> navigate('/login')}>
        <div className="sign sign2">
          <svg viewBox="0 0 575 575">
            <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
          </svg>
        </div>

        <div className="text text2 ">Login</div>
      </button>
    </div>
  );
};

export default Navbar;
