import React from "react";
import { Link } from "react-router-dom";
import test from "../../assets/bestsellers/test.png";

const ShopProduct = ({ id, name, brushImg, price, colors }) => {
  return (
    <div className="col-lg-4 col-md-6 col-6 shop-product-main">
      <div className="">
        <div className="col-12 shop-product">
          <Link to={`/product/${id}`}>
            <img
              className="col-lg-12 col-md-10 col-12"
              src={test}
              alt="Cetkice"
            />
          </Link>
          <p className="volkhov-regular p2 ">{name}</p>
          <p>{price}</p>

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
