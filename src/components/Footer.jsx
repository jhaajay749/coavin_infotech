import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <div>
      <footer className="bg-dark p-5 text-light text-center">
        @All rights reserved
        <h1 className="text-end">
          <i
            className="fas fa-arrow-alt-circle-up"
            onClick={() => scroll.scrollToTop()}
          ></i>
        </h1>
      </footer>
    </div>
  );
}

export default Footer;
