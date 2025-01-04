import React, { useEffect } from "react";
import Filter from "./Filter";
import ShopProducts from "./ShopProducts";

const Shop = ({ brushes }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sh">
      <div className="container">
        <div className="shop col-12">
          <Filter brushes={brushes} />
          <ShopProducts brushes={brushes} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
