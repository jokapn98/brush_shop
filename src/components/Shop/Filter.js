import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterColors, setFilter } from "../redux/filterSlice"; // ovo je sada filterSlice

const Filter = ({ brushes }) => {
  const dispatch = useDispatch();

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    if (value >= 1 || value === "") setMinPrice(value);
  };

  const handleFilter = () => {
    dispatch(
      setFilter({
        colors: selectedColors,
        brands: selectedBrands,
        collections: selectedCollections,
        tags: selectedTags,
        minPrice: minPrice ? Number(minPrice) : null,
        maxPrice: maxPrice ? Number(maxPrice) : null
      })
    );
  };

  return (
    <div className="col-lg-3 col-md-12 bg-primary">
      <div className="col-12">
        {/* Colors */}
        <p className="p1 volkhov-regular col-12">Colors</p>
        <div className="col-12 d-flex flex-wrap">
          {[...new Set(brushes.flatMap((b) => b.colors))].map(
            (color, index) => (
              <button
                key={index}
                style={{
                  backgroundColor: color,
                  border: selectedColors.includes(color)
                    ? "3px solid black"
                    : "1px solid #ccc",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  margin: "5px",
                  cursor: "pointer"
                }}
                onClick={() => {
                  const updated = selectedColors.includes(color)
                    ? selectedColors.filter((c) => c !== color)
                    : [...selectedColors, color];
                  setSelectedColors(updated);
                  dispatch(setFilterColors(updated)); // šalje u Redux
                }}
              />
            )
          )}
        </div>

        {/* Ovde ide Brand, Collection, Tag i Price kao ranije */}

        <button className="button-b mt-2" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
