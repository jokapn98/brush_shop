import React from "react";

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
  return (
    <div className="col-lg-3 col-md-12 shop-filters">
      {filters.map((filter) => (
        <div key={filter.category} className="shop-filter">
          <p className="p1 volkhov-regular">{filter.category}</p>
          <div
            className={
              filter.category === "Tags"
                ? "d-flex flex-wrap"
                : "d-flex flex-column"
            }
          >
            {filter.items.map((item) => (
              <button
                key={item}
                className={`p2 ${filter.category === "Tags" ? "col-4" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
