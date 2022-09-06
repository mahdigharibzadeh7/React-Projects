import React from 'react';
import { FaEllo } from "react-icons/fa";

const NavBar = () => {
    return (
      <div className="nav">
        <div className="title">
          <p>
            <FaEllo className="logo" />
            Anywhere App<span>.</span>
          </p>
        </div>
        <div className="home">Home</div>
        <div className="join">Join</div>
      </div>
    );
}

export default NavBar;
