import React from "react";
import blender from "../assets/newsletter/blender.png";
import onebrush from "../assets/newsletter/onebrush.png";

const Newsletter = () => {
  return (
    <div className="news">
      <div className="container news-main col-12 ">
        <div className="col-2 news-main-pictures ">
          <img className="col-lg-12 col-12 " src={onebrush} alt="" />
        </div>
        <div className="col-lg-8 col-md-12 news-main-content">
          <h1 className="h1 c-gray"> Subscribe To Our Newsletter</h1>
          <p className="c-gunmetal-gray">
            Subscribe to our newsletter and get the latest updates on makeup
            brush collections, special offers, and expert beauty tips. Be the
            first to discover new arrivals and exclusive deals tailored just for
            you!
          </p>
          <p className="c-gunmetal-gray p1"> michael@ymail.com</p>
          <button className="button-b col-lg-3 col-md-5 col-sm-6 col-7">
            Subscribe Now
          </button>
        </div>
        <div className="col-2 news-main-pictures ">
          <img className="col-lg-12 col-12 " src={blender} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
