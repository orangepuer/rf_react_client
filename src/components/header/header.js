import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <nav className="main-navigation container">
        <h1>
          <Link to="/">Flow</Link>
        </h1>
        <ul>
          <li>
            <i></i>
            <Link to="/">Submit</Link>
          </li>
          <li>
            <i></i>
            <Link to="/">Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;