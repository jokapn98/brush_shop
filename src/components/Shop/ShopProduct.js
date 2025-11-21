import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShopProduct = ({ id, name, brushImg, price, colors }) => {
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
    <div className="col-lg-4 col-md-6 col-6 shop-product-main">
      <div className="">
        <div className="col-12 shop-product">
          <div className="image-wrapper" style={{ position: "relative" }}>
            <Link to={`/product/${id}`}>
              <img
                className="col-lg-12 col-md-10 col-12"
                src={brushImg[currentImageIndex]} // prikazuje trenutnu sliku iz niza
                alt={name}
              />
            </Link>

            {/* Strelice — pojavljuju se samo ako ima više od jedne slike */}
            {brushImg.length > 1 && (
              <>
                <button className="prev-arrow" onClick={prevImage}>
                  ‹
                </button>
                <button className="next-arrow" onClick={nextImage}>
                  ›
                </button>
              </>
            )}
          </div>
          <p className="volkhov-regular p2">{name}</p>
          <p>{price}</p>
          {/* Boje */}
          <div className="colors">
            {colors.map((color) => (
              <button
                className="color"
                style={{ backgroundColor: color }}
                key={color}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
