import React, { useState } from "react";
import products from "./data/products";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import SortSelect from "./components/SortSelect";
import ProductList from "./components/ProductList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [cart, setCart] = useState([]);

  // Get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  // Filtered + sorted products
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((p) =>
      selectedCategory === "All" ? true : p.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOption === "priceLowHigh") return a.price - b.price;
      if (sortOption === "priceHighLow") return b.price - a.price;
      if (sortOption === "ratingHighLow") return b.rating - a.rating;
      return 0;
    });

  // Handle add to cart
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product.name);
    setCart([...cart, product]);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Header />

      <div className="p-4 flex flex-col md:flex-row gap-4 items-center justify-center">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <SortSelect selected={sortOption} onChange={setSortOption} />
      </div>

      <main className="p-4">
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      </main>
    </div>
  );
}

export default App;
