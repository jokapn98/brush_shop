import React, { useEffect } from "react";
import Filter from "./Filter";
import ShopProducts from "./ShopProducts";

const Shop = ({ brushes }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sh bb">
      <div className="container bb">
        <div className="shop col-12">
          <Filter />
          <ShopProducts brushes={brushes} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
