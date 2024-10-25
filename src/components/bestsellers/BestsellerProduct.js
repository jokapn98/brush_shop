import React from "react";
import image952 from "../../assets/bestsellers/image952.png";
import star from "../../assets/bestsellers/star.png";

const BestsellerProduct = () => {
  return (
    <div className="best-main col-lg-4 col-6 ">
      <div className="best-product col-11 ">
        <div className="best-product-content">
          <img src={image952} alt="" />
          <div className="best-product-stars  col-12">
            <div className="col-6">
              <p className="p1 c-gray">Shiny Dress</p>
              <p className="p4 c-gunmetal-gray">Al Karam</p>
            </div>
            <div className="p4 col-6 starimage ">
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />{" "}
              <img className="star" src={star} alt="" />{" "}
              <img className="star" src={star} alt="" />{" "}
              <img className="star" src={star} alt="" />
            </div>
          </div>

          <p className="p4 c-gray">(4.1k) Customer Reviews</p>
          <div className="best-product-price  col-12">
            <p className="c-gray h7 ">$95.50</p>
            <p className="p4 c-red">Best Seller</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestsellerProduct;
