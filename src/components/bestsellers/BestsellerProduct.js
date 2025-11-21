import React, { useState } from "react";

import star from "../../assets/bestsellers/star.png";
import { Link } from "react-router-dom";

const BestsellerProduct = ({
  name,
  shortDescription,
  description,
  quantity,
  rating,
  brushImg,
  tags,
  topSellers,
  price,
  id
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === brushImg.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? brushImg.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="best-main col-12">
      <div className="best-product col-11">
        <Link to={`/product/${id}`}>
          <div className="best-product-content">
            <div
              className="best-product-image-wrapper"
              style={{ position: "relative" }} //
            >
              <img
                src={brushImg[currentImageIndex]}
                alt={`${name} ${currentImageIndex}`}
                className="brush-image best-image"
              />

              <button
                className="prev-btn"
                onClick={prevImage}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.3)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer"
                }}
              >
                ‹
              </button>

              <button
                className="next-btn"
                onClick={nextImage}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.3)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer"
                }}
              >
                ›
              </button>
            </div>
            <div className="p4 col-12 starimage tdn">
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
            </div>
            <div className="best-product-desc  col-12">
              <div className="col-12">
                <p className="p1 c-gray tdn">{name}</p>
                {/* Prikazivanje name */}
                <p className="p4 c-gunmetal-gray">{shortDescription}</p>
              </div>
            </div>

            <div className="best-product-price  col-12 ">
              <p className="c-gray h7 ">${price}</p>
              <p className="p4 c-red">Best Seller</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BestsellerProduct;
