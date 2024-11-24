import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import ShopProduct from "./ShopProduct";

const ShopProducts = ({ brushes }) => {
  const { pageNum } = useParams(); // ucitava koja je trenutna stranica
  const navigate = useNavigate(); // ka novoj stranici
  const [page, setPage] = useState(Number(pageNum) || 1); // pocetna str
  const [startNum, setStartNum] = useState((page - 1) * 9);
  const [endNum, setEndNum] = useState(page * 9);

  // Ažuriraj URL kada se stranica promeni
  useEffect(() => {
    navigate(`/shop/page/${page}`);
    setStartNum((page - 1) * 9);
    setEndNum(page * 9);
  }, [page, navigate]);

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const brandFilter = (brand, niz) => {
    return niz.filter((item) => item.brand === brand);
  };

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

      <div className="shop-products col-12 row">
        {brushes.slice(startNum, endNum).map((brush) => (
          <ShopProduct
            key={brush.id}
            id={brush.id}
            name={brush.name}
            brushImg={brush.brushImg}
            price={brush.price}
            colors={brush.colors}
          />
        ))}
      </div>
      <div className="shop-pageNum">
        <div className="col-2 prod-content-quantity-counter ">
          <div className="col-4">
            <button onClick={goToPreviousPage}>&lt;</button>
          </div>
          <div className="col-4">{page}</div>
          <div className="col-4">
            <button onClick={goToNextPage}> &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
