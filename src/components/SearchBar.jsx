import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded w-full md:w-1/3"
    />
  );
}

export default SearchBar;
