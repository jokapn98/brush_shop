import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ShopProduct from "../Shop/ShopProduct";

const Shopplace = () => {
  const { pageNum } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(Number(pageNum) || 1);
  const [startNum, setStartNum] = useState((page - 1) * 12);
  const [endNum, setEndNum] = useState(page * 12);
  const brushes = useSelector((state) => state.brushes);
  const [filterBrand, setFilterBrand] = useState([]);

  useEffect(() => {
    navigate(`/shop/page/${page}`);
    setStartNum((page - 1) * 12);
    setEndNum(page * 12);
  }, [page, navigate]);

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleCheckboxChange = (brand) => {
    setFilterBrand((prevBrands) => {
      if (prevBrands.includes(brand)) {
        // Ako je već selektovan, ukloni ga
        return prevBrands.filter((b) => b !== brand);
      } else {
        // Ako nije selektovan, dodaj ga
        return [...prevBrands, brand];
      }
    });
  };

  // Filtriranje proizvoda na osnovu selektovanih brendova
  const filteredBrushes =
    filterBrand.length > 0
      ? brushes.filter((brush) => filterBrand.includes(brush.brend))
      : brushes;

  return (
    <div className="sp">
      <div className="sp-filter">
        <p>Brand Shop Place</p>
        {[...new Set(brushes.map((e) => e.brend))].map((brend, index) => (
          <div key={index}>
            <input
              id={`brend-${brend}`}
              type="checkbox"
              onChange={() => handleCheckboxChange(brend)}
            />
            <label htmlFor={`brend-${brend}`}>{brend}</label>
          </div>
        ))}
      </div>
      <div className="sp-products">
        <div className="col-12 row">
          {filteredBrushes.slice(startNum, endNum).map((brush) => (
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
        <div className="bb">
          <div className="sp-products-pageCounter">
            <div className="">
              <button onClick={goToPreviousPage}>&lt;</button>
            </div>
            <div className="">{page}</div>
            <div className="">
              <button onClick={goToNextPage}>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopplace;
