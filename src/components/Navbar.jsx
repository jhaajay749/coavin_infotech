import React from "react";
import { Link } from "react-scroll";
import logo from "../image/logoOne.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container">
          <img src={logo} width="60px" alt="logo" className="me-3" />
          <h1 className="navbar-brand">coavin infotech</h1>

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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="home"
                  smooth={true}
                  duration={100}
                  className="nav-link active"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section1"
                  smooth={true}
                  duration={100}
                  className="nav-link active"
                  aria-current="page"
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section2"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section3"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
