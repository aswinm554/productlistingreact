import React from "react";

function Navbar({ cartCount }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Shop</h1>
      <span>🛒 Cart: {cartCount}</span>
    </nav>
  );
}

export default Navbar;
