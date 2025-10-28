import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShopProduct from "../Shop/ShopProduct";
import {
  setFilterBrand,
  setFilterCollection,
  setFilterTag
} from "../../redux/filter/filterSlice";

const Shopplace = () => {
  const { pageNum } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(Number(pageNum) || 1);
  const [startNum, setStartNum] = useState((page - 1) * 12);
  const [endNum, setEndNum] = useState(page * 12);
  const brushes = useSelector((state) => state.brushes);

  // Prvo, koristi useSelector da dohvatiš filtere iz Redux stanja
  const filterBrand = useSelector((state) => state.filters.filterBrand);
  const filterCollection = useSelector(
    (state) => state.filters.filterCollection
  );
  const filterTag = useSelector((state) => state.filters.filterTag);

  const dispatch = useDispatch();

  useEffect(() => {
    navigate(`/shop/page/${page}`);
    setStartNum((page - 1) * 12);
    setEndNum(page * 12);
    /*     alert(`Filter brend: ${filterBrand.join(", ")}`); */
  }, [page, navigate, filterBrand]); // filter iz reduxa

  useEffect(() => {
    setPage(1);
  }, [filterBrand, filterCollection, filterTag]);
  useEffect(() => {
    setPage(1);
  }, [filterBrand, filterCollection, filterTag]);

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleCheckboxChange = (value, setFilter, filterType) => {
    let updatedFilters;

    if (filterType === "brand") {
      updatedFilters = filterBrand.includes(value)
        ? filterBrand.filter((item) => item !== value)
        : [...filterBrand, value];
      dispatch(setFilterBrand(updatedFilters));
    }

    if (filterType === "collection") {
      updatedFilters = filterCollection.includes(value)
        ? filterCollection.filter((item) => item !== value)
        : [...filterCollection, value];
      dispatch(setFilterCollection(updatedFilters));
    }

    if (filterType === "tag") {
      updatedFilters = filterTag.includes(value)
        ? filterTag.filter((item) => item !== value)
        : [...filterTag, value];
      dispatch(setFilterTag(updatedFilters));
    }
  };

  // Filtriranje proizvoda
  const filteredBrushes = brushes.filter((brush) => {
    const brandMatch =
      filterBrand.length === 0 || filterBrand.includes(brush.brend);
    const collectionMatch =
      filterCollection.length === 0 ||
      filterCollection.includes(brush.collection);
    const tagMatch =
      filterTag.length === 0 ||
      filterTag.some((tag) => brush.tags.includes(tag));
    return brandMatch && collectionMatch && tagMatch;
  });

  return (
    <div className="sp">
      {/* Filteri */}
      <div className="sp-filter">
        {/* color filtriranje */}
        <p className="c-gray p1">Color</p>
        {[...new Set(brushes.flatMap((e) => e.colors))].map((color, index) => (
          <div key={index}>
            <input
              className="filter-checkbox"
              id={`color-${color}`}
              type="checkbox"
              checked={filterTag.includes(color)}
              onChange={() => handleCheckboxChange(color, setFilterTag, "tag")}
              style={{
                backgroundColor: filterTag.includes(color)
                  ? color
                  : "transparent",
                border: `2px solid ${color}`,
                width: "20px",
                height: "20px",
                cursor: "pointer"
              }}
            />
          </div>
        ))}

        {/* brend filtriranje */}
        <p className="c-gray p1">Brand</p>
        {[...new Set(brushes.map((e) => e.brend))].map((brend, index) => (
          <div key={index}>
            <input
              id={`brend-${brend}`}
              type="checkbox"
              checked={filterBrand.includes(brend)}
              onChange={() =>
                handleCheckboxChange(brend, setFilterBrand, "brand")
              } // Prosleđuješ filterTip
            />
            <label htmlFor={`brend-${brend}`}>{brend}</label>
          </div>
        ))}

        {/* Collection filtriranje*/}
        <p className="c-gray p1">Collection</p>
        {[...new Set(brushes.map((e) => e.collection))].map(
          (collection, index) => (
            <div key={index}>
              <input
                id={`collection-${collection}`}
                type="checkbox"
                checked={filterCollection.includes(collection)}
                onChange={() =>
                  handleCheckboxChange(
                    collection,
                    setFilterCollection,
                    "collection"
                  )
                }
              />
              <label htmlFor={`collection-${collection}`}>{collection}</label>
            </div>
          )
        )}

        {/* Filterani tagovi */}
        <p className="c-gray p1">Tag</p>
        {[...new Set(brushes.flatMap((e) => e.tags))].map((tag, index) => (
          <div key={index}>
            <input
              id={`tag-${tag}`}
              type="checkbox"
              checked={filterTag.includes(tag)}
              onChange={() => handleCheckboxChange(tag, setFilterTag, "tag")}
            />
            <label htmlFor={`tag-${tag}`}>{tag}</label>
          </div>
        ))}
      </div>

      {/* Prikaz proizvoda */}
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
