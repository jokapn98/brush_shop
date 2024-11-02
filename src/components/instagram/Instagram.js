import React from "react";
import square from "../../assets/instagram/square.png";
import rectangle from "../../assets/instagram/rectangle.png";
const Instagram = () => {
  return (
    <div className="ig col-12 ">
      <div className="col-md-7 col-9 ig-text">
        <h1 className="h1 c-gray "> Follow Us On Instagram</h1>
        <p className="p2 c-gunmetal-gray ">
          Follow us for the latest updates, exclusive offers, and makeup
          inspiration. Discover tips, tricks, and see how our products transform
          looks! Do not miss the chance to be part of our beautiful community of
          makeup lovers!
        </p>
      </div>
      <div className="col-12  ig-photo">
        <div className="ig-photo-square">
          <img src={square} alt="" />
        </div>
        <div className="ig-photo-rectangle">
          <img src={rectangle} alt="" />
        </div>
        <div className="ig-photo-square">
          <img src={square} alt="" />
        </div>
        <div className="ig-photo-rectangle">
          <img src={rectangle} alt="" />
        </div>
        <div className="ig-photo-square">
          <img src={square} alt="" />
        </div>
        <div className="ig-photo-rectangle ig-photo-none">
          <img src={rectangle} alt="" />
        </div>
        <div className="ig-photo-square ig-photo-none">
          <img src={square} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
