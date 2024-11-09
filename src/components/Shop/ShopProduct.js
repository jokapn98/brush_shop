import React from "react";
import test from "../../assets/bestsellers/test.png";
const ShopProduct = ({ name, brushImg, price }) => {
  return (
    <div className="col-4">
      <div className="col-12 shop-product">
        <img className="col-12" src={test} alt="Cetkice" />
        <p className="volkhov-regular p2">{name}</p>
        <p>{price}</p>
        <button className="col-3"> colors</button>
      </div>
    </div>
  );
};

export default ShopProduct;
