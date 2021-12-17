import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src="./logo192.png" alt="" width="30" height="24" /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <NavLink to="/" className={"link"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink to="/about" className={"link"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink to="/contact" className={"link"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar fixed-bottom navbar-light bg-dark">
        <div className="text-white mx-auto">Designed by Ramya Sri</div>
      </nav>
    </>
  );
};
