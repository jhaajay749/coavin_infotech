import React from "react";

function Contact() {
  return (
    <div
      className="m-1 p-5"
      id="section3"
      style={{ backgroundColor: "#003366" }}
    >
      <h1 className="display-5 text-center text-light">contact us</h1>

      <h1 className=" text-center display-2 mb-5">
        <a href="https://www.linkedin.com/in/coavin-infotech/">
          <i class="fab fa-linkedin"></i>
          <h2>Linkedin</h2>
        </a>
      </h1>

      <p className="d-flex p-2 text-light justify-content-center fw-bold">
        <span className="text-info me-2">Business Email: </span>
        coavininfotech@gmail.com
      </p>
    </div>
  );
}

export default Contact;
