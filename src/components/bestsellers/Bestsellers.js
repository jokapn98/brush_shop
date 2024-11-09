import React from "react";
import BestsellerNav from "./BestsellerNav";
import BestsellerProducts from "./BestsellerProducts";

const Bestsellers = ({ brushes }) => {
  return (
    <div className="best center ">
      <div className="container">
        <div className="best-sellers col-12 ">
          <h1 className="col-8 c-gunmetal-gray volkhov-regular text-center">
            Best Sellers
          </h1>
          <p className="col-lg-6 col-md-8 col-11 text-center c-gunmetal-gray">
            Discover our most popular brushes, loved by makeup enthusiasts for
            their superior performance and quality.
          </p>
        </div>
        <div className="col-12">
          <BestsellerNav />
          <BestsellerProducts brushes={brushes} />
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
