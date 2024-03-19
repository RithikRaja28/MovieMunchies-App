// CartLayout.jsx
import React, { useState } from "react";
import Cart from "./Cart";
import NavbarLayout from "../Navbar Component/NavbarLayout";
import CartItem from "./Cart";

const CartLayout = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="container-fluid p-3 text-light">
      <div className="row">
        <div className="cart-items">
          <h1>awfawdw</h1>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
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
