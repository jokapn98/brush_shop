import React from "react";
import image952 from "../../assets/bestsellers/image952.png";
import star from "../../assets/bestsellers/star.png";

const BestsellerProduct = ({
  name,
  shortDescription,
  description,
  quantity,
  rating,
  brushImg,
  tags,
  topSellers,
  price
}) => {
  return (
    <div className="best-main col-12">
      <div className="best-product col-11">
        <div className="best-product-content">
          <img src={image952} alt="" />
          <div className="p4 col-12 starimage ">
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />{" "}
            <img className="star" src={star} alt="" />{" "}
            <img className="star" src={star} alt="" />{" "}
            <img className="star" src={star} alt="" />
          </div>
          <div className="best-product-desc  col-12">
            <div className="col-12">
              <p className="p1 c-gray">{name}</p> {/* Prikazivanje name */}
              <p className="p4 c-gunmetal-gray">{shortDescription}</p>
            </div>
          </div>

          <div className="best-product-price  col-12 ">
            <p className="c-gray h7 ">${price}</p>
            <p className="p4 c-red">Best Seller</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestsellerProduct;
