import React, { useState } from "react";

const Filter = () => {
  const filters = [
    {
      category: "Brands",
      items: ["Maange", "Sylyne", "Jaf", "KSHNO", "RANCAI"]
    },
    {
      category: "Collections",
      items: ["Face sets", "Eye sets", "Poppins", "Equipments"]
    },
    {
      category: "Tags",
      items: [
        "Real hair",
        "Eyes",
        "Face",
        "Lips",
        "Blush",
        "Eyebrow",
        "Blender",
        "Highlighter",
        "Foundation",
        "Eyeshadow",
        "Bronzer"
      ]
    }
  ];
  const [toggle, setToggle] = useState(true);

  return (
    <div className="col-lg-3 col-md-12 shop-filters">
      {filters.map((filter) => (
        <div key={filter.category} className="shop-filter mb-4">
          <button onClick={() => setToggle(!toggle)} className="filter-title">
            {filter.category} &gt;
          </button>
          <div className="row g-2">
            {filter.items.map((item) => (
              <div
                key={item}
                className="col-lg-6 col-md-4 col-4 filter-item d-flex align-items-center"
              >
                <input
                  type="checkbox"
                  id={item}
                  name={item}
                  value={item}
                  className="filter-checkbox me-2"
                />
                <label htmlFor={item} className="filter-label">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
