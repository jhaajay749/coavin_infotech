import React from "react";
import { Link } from "react-scroll";

function Card(props) {
  return (
    <>
      <div className="container col-10 col-md-4">
        <div className="card">
          <img src={props.imgsrc} alt="card-img" className="card-img-top" />

          <div className="card-body">
            <h5 className="card-title fw-bold">{props.title}</h5>
            <p className="card-text fw-bold">{props.content}</p>
            <Link
              to="section3"
              smooth={true}
              duration={100}
              className="btn btn-primary"
            >
              contact now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
