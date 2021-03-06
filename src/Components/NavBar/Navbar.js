import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark pb-2 pt-2">
        <div className="container px-5">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavLink
              className="nav-link"
              exact
              to="/"
            >
              <div className="navbarLogo">
                <p className="logo">Fernanda Andrade</p>
                <p className="logo-subtitle">Portfolio Pessoal</p>
              </div>
            </NavLink>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/"
                  activeClassName="selected"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  activeClassName="selected"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/portfolio"
                  activeClassName="selected"
                >
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
