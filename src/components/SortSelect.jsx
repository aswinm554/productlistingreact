import React from "react";

function SortSelect({ selected, onChange }) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="">Sort By</option>
      <option value="priceLowHigh">Price: Low to High</option>
      <option value="priceHighLow">Price: High to Low</option>
      <option value="ratingHighLow">Rating: High to Low</option>
    </select>
  );
}

export default SortSelect;
