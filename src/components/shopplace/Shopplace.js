import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ShopProduct from "../Shop/ShopProduct";
const Shopplace = () => {
  const { pageNum } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(Number(pageNum) || 1);
  const [startNum, setStartNum] = useState((page - 1) * 9);
  const [endNum, setEndNum] = useState(page * 9);
  const brushes = useSelector((state) => state.brushes);
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

  return (
    <div className="sp">
      <div className="sp-filter">
        <p> Brand</p>
        {brushes.map((e) => (
          <div key={e.id}>
            <input id={`brend-${e}`} type="checkbox" />
            {e.brend}
          </div>
        ))}
      </div>
      <div className="sp-products">
        <div className="col-12 row">
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
        <div className="bb">
          <div className="sp-products-pageCounter ">
            <div className="">
              <button onClick={goToPreviousPage}>&lt;</button>
            </div>
            <div className="">{page}</div>
            <div className="">
              <button onClick={goToNextPage}> &gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopplace;
