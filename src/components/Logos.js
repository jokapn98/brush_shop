import React from "react";
import jaf from "../assets/logos/jaf.png";
import kshbo from "../assets/logos/kshbo.png";
import maange from "../assets/logos/maange.png";
import rancai from "../assets/logos/rancai.png";
import sylyne from "../assets/logos/sylyne.png";
const Logos = () => {
  return (
    <div className="center">
      <div className="container">
        <div className=" logos col-12 row">
          <div className=" col-md-2 col-4 logos-logo">
            <img
              className="col-8"
              src={kshbo}
              alt="Kshbo četkice za šminkanje"
            />
          </div>
          <div className=" col-md-2 col-4 logos-logo">
            <img
              className="col-6"
              src={jaf}
              alt="Jaf set četkica za šminkanje"
            />
          </div>
          <div className=" col-md-2 col-4 logos-logo">
            <img
              className="col-9"
              src={maange}
              alt="Maange četkice za precizno šminkanje"
            />
          </div>
          <div className=" col-md-2 col-4 logos-logo">
            <img
              className=" col-6"
              src={sylyne}
              alt="Sylyne profesionalne četkice za šminkanje"
            />
          </div>
          <div className=" col-md-2 col-4 logos-logo">
            <img
              className="col-8"
              src={rancai}
              alt="Rancai četkice za nanošenje pudera i senki"
            />
          </div>
          <div className=" col-md-2 col-4 logos-logo">
            <img
              className="col-6"
              src={jaf}
              alt="Jaf set četkica za šminkanje"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
