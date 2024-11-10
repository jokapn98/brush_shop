import React from "react";
import test from "../../assets/bestsellers/test.png";
const ShopProduct = ({ name, brushImg, price, colors }) => {
  return (
    <div className="col-4">
      <div className="col-12 shop-product">
        <img className="col-12" src={test} alt="Cetkice" />
        <p className="volkhov-regular p2">{name}</p>
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
  );
};

export default ShopProduct;
