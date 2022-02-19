import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/Favoriten"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Favoriten
          </NavLink>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};

export default Header;
