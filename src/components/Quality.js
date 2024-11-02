import React from "react";
import quality from "../assets/quality/quality.png";
import protection from "../assets/quality/protection.png";

import shipping from "../assets/quality/shipping.png";

import support from "../assets/quality/support.png";

const Quality = () => {
  return (
    <div className="quality">
      <div className="container quality-content row">
        <div className="col-lg-3 col-md-6 col-6 quality-item">
          <img src={quality} alt="" />
          <p className="p2 fw-600 c-gray">
            High Quality <br />
            <span className="p3 c-gray">Top materials </span>
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-6 quality-item">
          <img src={protection} alt="" />
          <p className="p2 fw-600 c-gray">
            Warrany Protection
            <br /> <span className="p3 c-gray">Over 2 years </span>
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-6 quality-item">
          <img src={shipping} alt="" />
          <p className="p2 fw-600 c-gray">
            Free Shipping
            <br /> <span className="p3 c-gray">Order over 150 $ </span>
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-6 quality-item">
          <img src={support} alt="" />
          <p className="p2 fw-600 c-gray">
            24 / 7 Support
            <br /> <span className="p3 c-gray">Dedicated support </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quality;
