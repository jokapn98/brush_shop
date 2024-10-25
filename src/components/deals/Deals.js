import React from "react";

const Deals = () => {
  return (
    <div className="deals bg-light-platinum">
      <div className="container">
        <div className="deals-main col-12">
          <div className="deals-main-content col-md-5 col-12 ">
            <h1 className="volkhov-regular h1 c-gray">Deals Of The Month</h1>
            <p className="c-gunmetal-gray">
              Do not miss out on our top-selling brushes! These are the products
              our customers love the most, designed to elevate your makeup
              routine.
            </p>
            <button className="button-b w-50">Buy Now</button>
            <p className="h6 c-gray">Hurry, Before It’s Too Late!</p>
            <p className="c-gunmetal-gray">
              Grab your favorites before the deal ends. Limited-time offer!
            </p>
          </div>
          <div className="w-100 bred  "></div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
