import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ShopProduct from "./ShopProduct";

const ShopProducts = ({ brushes }) => {
  return (
    <div className="col-lg-9 col-md-12">
      <Dropdown>
        <Dropdown.Toggle
          className="volkhov-regular fw-500 p2"
          variant=""
          id="dropdown-basic"
        >
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            className="volkhov-regular fw-500 p2"
            href="#/action-1"
          >
            Action
          </Dropdown.Item>
          <Dropdown.Item
            className="volkhov-regular fw-500 p2"
            href="#/action-2"
          >
            Another action
          </Dropdown.Item>
          <Dropdown.Item
            className="volkhov-regular fw-500 p2"
            href="#/action-3"
          >
            Something else
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="shop-products col-12 bb row">
        {brushes.map((brush) => (
          <ShopProduct
            name={brush.name}
            brushImg={brush.brushImg}
            price={brush.price}
            colors={brush.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;
