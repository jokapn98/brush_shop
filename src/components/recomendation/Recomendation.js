import React from "react";
import rec from "../../assets/recomendation/rec.png";
const Recomendation = () => {
  return (
    <div className="rec col-12 bg-soft-gray row">
      <div className="col-lg-8 col-md-12 rec-picture bg-cool-silver">
        <img
          className="col-xxl-5 col-xl-6 col-lg-7 col-md-6 col-8"
          src={rec}
          alt=""
        />
      </div>

      <div className="col-lg-4 col-md-12 rec-text ">
        <p className="c-classicgray p2">Face brush set</p>
        <p className="c-gray h1">All-in-One Brush Sets</p>
        <p className="p2">Elegance</p>
        <p className="p2 c-classicgray">
          Complete your collection with our curated brush sets, specifically
          designed to cater to the needs of both beginners and professionals.
          Each set includes essential brushes for foundation, eyeshadow, and
          contouring, ensuring you have all the tools needed for flawless makeup
          application.
        </p>
        <p className="p2 c-classicgray">
          Size: <span>M</span>
        </p>
        <p className="h6">1800.00 rsd</p>
        <button className="button-b col-xl-6 col-lg-8 col-md-3 col-5">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Recomendation;
