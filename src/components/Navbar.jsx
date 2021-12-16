import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container">
          <h1 className="navbar-brand">SmoothScroll</h1>

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
                  duration={1000}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section1"
                  smooth={true}
                  duration={1000}
                  className="nav-link active"
                  aria-current="page"
                >
                  Section 1
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section2"
                  smooth={true}
                  duration={1000}
                  className="nav-link"
                >
                  Section 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section3"
                  smooth={true}
                  duration={1000}
                  className="nav-link"
                >
                  Section 3
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section4"
                  smooth={true}
                  duration={1000}
                  className="nav-link"
                >
                  Section 4
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section5"
                  smooth={true}
                  duration={1000}
                  className="nav-link"
                >
                  Section 5
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
