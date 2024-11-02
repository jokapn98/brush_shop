import React from "react";
import BestsellerProduct from "./BestsellerProduct";

const BestsellerProducts = () => {
  return (
    <div>
      <div className="best-products col-12 row">
        <BestsellerProduct />
        <BestsellerProduct />
        <BestsellerProduct />
        <BestsellerProduct />
        <BestsellerProduct />
        <BestsellerProduct />
        <div className="col-12 d-flex justify-content-center">
          <button className="button-b col-lg-2 col-md-3 col-4">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestsellerProducts;
