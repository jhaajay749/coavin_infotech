import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function Service() {
  return (
    <>
      <h1 className="text-center mt-5 mb-4 fw-bold">Our Services</h1>
      <div
        className="row container mx-auto g-4 mt-5"
        style={{ backgroundColor: "#547aa1" }}
      >
        {Sdata.map((val, index) => {
          return (
            <Card
              key={index}
              title={val.title}
              content={val.content}
              imgsrc={val.imgsrc}
            />
          );
        })}
      </div>
    </>
  );
}

export default Service;
