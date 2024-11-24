import React from "react";
import BestsellerProduct from "./BestsellerProduct";
import { Link } from "react-router-dom";
const BestsellerProducts = ({ brushes }) => {
  return (
    <div className="best-products col-12 row">
      {brushes
        .filter((brush) => brush.topSellers === true)
        .slice(0, 6) // Ograničava broj na maksimalno 6 proizvoda
        .map((brush) => (
          <div className="col-lg-4 col-md-6 col-6" key={brush.id}>
            <BestsellerProduct
              name={brush.name}
              id={brush.id}
              shortDescription={brush.shortDescription}
              description={brush.description}
              quantity={brush.quantity}
              rating={brush.rating}
              brushImg={brush.brushImg}
              tags={brush.tags}
              topSellers={brush.topSellers}
              price={brush.price}
            />
          </div>
        ))}

      <div className="col-12 d-flex justify-content-center">
        <Link
          to="/shop"
          className="col-lg-2 col-md-3 col-4 button-b col-12 d-flex justify-content-center text-decoration-none"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default BestsellerProducts;
