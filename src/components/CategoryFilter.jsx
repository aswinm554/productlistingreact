import React from "react";

function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <select
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="All">All Categories</option>
      {categories.map((cat, index) => (
        <option key={index} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
