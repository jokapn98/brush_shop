import React, { useState } from "react";

const Filter = ({ brushes }) => {
  const [selectedColors, setSelectedColors] = useState([]); // Drži selektovane boje
  const [selectedBrands, setSelectedBrands] = useState([]); // Drži selektovane brendove
  const [selectedCollections, setSelectedCollections] = useState([]); // Drži selektovane kolekcije
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedTags, setSelectedTags] = useState([]); // Drži selektovane tagove

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };
  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    // Postavi minimum na 1
    if (value >= 1 || value === "") {
      setMinPrice(value); // Ako je vrednost validna, ažuriraj minPrice
    }
  };

  return (
    <div className="col-lg-3 col-md-12">
      {/* Colors */}
      <div className="col-12">
        {/* Colors */}
        <p className="p1 volkhov-regular col-12">Colors</p>
        <div className="col-12 d-flex flex-wrap">
          {[...new Set(brushes.flatMap((e) => e.colors))].map(
            (color, index) => (
              <button
                key={index}
                className="color m-1"
                style={{
                  backgroundColor: color,
                  border: selectedColors.includes(color)
                    ? "2px solid black"
                    : "none",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%"
                }}
                onClick={() =>
                  setSelectedColors(
                    (prev) =>
                      prev.includes(color)
                        ? prev.filter((c) => c !== color) // Uklanja ako je već selektovano
                        : [...prev, color] // Dodaje ako nije selektovano
                  )
                }
              ></button>
            )
          )}
        </div>

        {/* Brand */}
        <p className="filter-heading p1 volkhov-regular">Brand</p>
        <div className="d-flex flex-wrap">
          {[...new Set(brushes.map((e) => e.brend))].map((brand, index) => (
            <div className="col-6 d-flex align-items-center" key={index}>
              <input
                type="checkbox"
                id={`brand-${index}`}
                className="form-check-input me-2"
                checked={selectedBrands.includes(brand)}
                onChange={() =>
                  setSelectedBrands(
                    (prev) =>
                      prev.includes(brand)
                        ? prev.filter((b) => b !== brand) // Uklanja ako je selektovan
                        : [...prev, brand] // Dodaje ako nije selektovan
                  )
                }
              />
              <label htmlFor={`brand-${index}`} className="form-check-label">
                {brand}
              </label>
            </div>
          ))}
        </div>

        <p className="filter-heading p1 volkhov-regular">Collection</p>
        <div className="col-12 d-flex flex-wrap">
          {[...new Set(brushes.map((e) => e.collections))].map(
            (collection, index) => (
              <div className="col-6 d-flex align-items-center" key={index}>
                <input
                  type="checkbox"
                  id={`collection-${index}`}
                  className="form-check-input me-2"
                  checked={selectedCollections.includes(collection)}
                  onChange={() =>
                    setSelectedCollections(
                      (prev) =>
                        prev.includes(collection)
                          ? prev.filter((c) => c !== collection) // Uklanja ako je selektovana
                          : [...prev, collection] // Dodaje ako nije selektovana
                    )
                  }
                />
                <label
                  htmlFor={`collection-${index}`}
                  className="form-check-label"
                >
                  {collection}
                </label>
              </div>
            )
          )}
        </div>

        {/* Tags */}
        <p className="filter-heading p1 volkhov-regular">Tag</p>
        <div className="col-12 d-flex flex-wrap">
          {[...new Set(brushes.flatMap((e) => e.tags))].map((tag, index) => (
            <div className="col-6 d-flex align-items-center mb-2" key={index}>
              <input
                type="checkbox"
                id={`tag-${index}`} // Jedinstveni ID za svaki tag
                className="form-check-input me-2"
              />
              <label htmlFor={`tag-${index}`} className="form-check-label">
                {tag}
              </label>
            </div>
          ))}
        </div>

        <p className="filter-heading p1 volkhov-regular">Price</p>
        <div className="col-12">
          <div className="filter-price">
            <div className="">
              <input
                type="number"
                id="min-price"
                value={minPrice}
                onChange={handleMinPriceChange}
                placeholder="Minimum price"
                className="form-control mb-2"
              />
            </div>
            <div className="">
              <input
                type="number"
                id="max-price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Maximum price"
                className="form-control"
              />
            </div>
          </div>
          <div>
            <button className="button-b">filter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
