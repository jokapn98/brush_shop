import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShopProduct from "../Shop/ShopProduct";

import {
  setFilterBrand,
  setFilterCollection,
  setFilterTag,
  setFilterColors
} from "../../redux/filter/filterSlice";
import { clearSearch } from "../../redux/search/searchSlice";

const Shopplace = () => {
  const { pageNum } = useParams();
  const [page, setPage] = useState(Number(pageNum) || 1);

  const brushes = useSelector((state) => state.brushes);
  const searchTerm = (useSelector((state) => state.search) || "").toLowerCase();
  const filterBrand = useSelector((state) => state.filters.filterBrand);
  const filterCollection = useSelector(
    (state) => state.filters.filterCollection
  );
  const filterTag = useSelector((state) => state.filters.filterTag);
  const filterColors = useSelector((state) => state.filters.filterColors);

  const dispatch = useDispatch();
  const resetFilters = () => {
    dispatch(setFilterColors([]));
    dispatch(setFilterBrand([]));
    dispatch(setFilterCollection([]));
    dispatch(setFilterTag([]));
    dispatch(clearSearch());
  };

  useEffect(() => {
    setPage(1);
  }, [searchTerm, filterBrand, filterCollection, filterTag, filterColors]);

  // FILTER + SEARCH
  const filteredBrushes = brushes.filter((brush) => {
    const name = brush.name?.toLowerCase() || "";
    const desc = brush.description?.toLowerCase() || "";

    const searchMatch =
      searchTerm === "" ||
      name.includes(searchTerm) ||
      desc.includes(searchTerm);
    const brandMatch =
      filterBrand.length === 0 || filterBrand.includes(brush.brend);
    const collectionMatch =
      filterCollection.length === 0 ||
      brush.collections.some((c) => filterCollection.includes(c));
    const tagMatch =
      filterTag.length === 0 || brush.tags.some((t) => filterTag.includes(t));
    const colorMatch =
      filterColors.length === 0 ||
      brush.colors.some((c) => filterColors.includes(c));

    return (
      searchMatch && brandMatch && collectionMatch && tagMatch && colorMatch
    );
  });

  const start = (page - 1) * 12;
  const end = page * 12;
  const paginatedBrushes = filteredBrushes.slice(start, end);

  const goToNextPage = () => setPage((p) => p + 1);
  const goToPreviousPage = () => setPage((p) => (p > 1 ? p - 1 : 1));

  const handleCheckboxChange = (value, filterType) => {
    if (filterType === "brand") {
      const updated = filterBrand.includes(value)
        ? filterBrand.filter((i) => i !== value)
        : [...filterBrand, value];
      dispatch(setFilterBrand(updated));
    }

    if (filterType === "collection") {
      const updated = filterCollection.includes(value)
        ? filterCollection.filter((i) => i !== value)
        : [...filterCollection, value];
      dispatch(setFilterCollection(updated));
    }

    if (filterType === "tag") {
      const updated = filterTag.includes(value)
        ? filterTag.filter((i) => i !== value)
        : [...filterTag, value];
      dispatch(setFilterTag(updated));
    }
  };

  return (
    <div className="sp">
      {/* FILTERI */}
      <div className="sp-filter">
        <button
          onClick={resetFilters}
          style={{
            padding: "8px 12px",
            width: "120px",
            margin: "10px 0px",
            backgroundColor: "transparent",
            border: "1px solid #212529",
            cursor: "pointer",
            borderRadius: "5px",
            fontSize: "12px"
          }}
        >
          Reset Filters
        </button>
        {/* COLORS */}
        <p className="c-gray p1">Color</p>
        <div className="colors-container">
          {[...new Set(brushes.flatMap((b) => b.colors))].map((color, i) => (
            <div
              key={i}
              onClick={() => {
                const updated = filterColors.includes(color)
                  ? filterColors.filter((c) => c !== color)
                  : [...filterColors, color];
                dispatch(setFilterColors(updated));
              }}
              className={`color-circle ${
                filterColors.includes(color) ? "selected" : ""
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* BRAND */}
        <p className="c-gray p1">Brand</p>
        {[...new Set(brushes.map((b) => b.brend))].map((br, i) => (
          <div key={i} className="filter-item">
            <input
              type="checkbox"
              checked={filterBrand.includes(br)}
              onChange={() => handleCheckboxChange(br, "brand")}
            />
            <label>{br}</label>
          </div>
        ))}

        {/* COLLECTION */}
        <p className="c-gray p1">Collection</p>
        {[...new Set(brushes.flatMap((b) => b.collections))].map((col, i) => (
          <div key={i} className="filter-item">
            <input
              type="checkbox"
              checked={filterCollection.includes(col)}
              onChange={() => handleCheckboxChange(col, "collection")}
            />
            <label>{col}</label>
          </div>
        ))}

        {/* TAG */}
        <p className="c-gray p1">Tag</p>
        {[...new Set(brushes.flatMap((b) => b.tags))].map((tag, i) => (
          <div key={i} className="filter-item">
            <input
              type="checkbox"
              checked={filterTag.includes(tag)}
              onChange={() => handleCheckboxChange(tag, "tag")}
            />
            <label>{tag}</label>
          </div>
        ))}
      </div>

      {/* PROIZVODI */}
      <div className="sp-products">
        <div className="col-12 row">
          {paginatedBrushes.map((brush) => (
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

        {/* PAGINACIJA */}
        <div className="sp-products-pageCounter">
          <button onClick={goToPreviousPage}>&lt;</button>
          <div>{page}</div>
          <button onClick={goToNextPage}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Shopplace;
