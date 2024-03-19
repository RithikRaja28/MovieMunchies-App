// CartLayout.jsx
import React, { useState } from "react";
import Cart from "./Cart";
import NavbarLayout from "../Navbar Component/NavbarLayout";

const CartLayout = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col-md-8">
          <Cart items={cartItems} onRemove={removeFromCart} />
        </div>
        <div className="col-md-4">
          <NavbarLayout />
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          alert("This is the order summary.");
        }}
      >
        Order Now
      </button>
    </div>
  );
};

export default CartLayout;
