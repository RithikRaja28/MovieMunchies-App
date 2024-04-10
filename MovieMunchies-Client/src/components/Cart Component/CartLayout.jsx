import React from "react";
import NavbarLayout from "../Navbar Component/NavbarLayout";
import "./Cart.css";
import { useNavigate } from "react-router";
const CartLayout = ({ cartItems, removeItem }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const navigate = useNavigate();
   const placeOrder = () => {
     console.log("CartItems in CartLayout:", cartItems);
     navigate("/checkout", { state: { cartItems } });
   };
  return (
    <div>
      <div className="container-fluid m-2">
        <NavbarLayout />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <h4 className="h5 text-light mt-3">Your Cart:</h4>
          {cartItems.map((item, index) => (
            <div className="col-sm-3 mt-3" key={index}>
              <div className="card text-light text-center">
                <div className="card-body">
                  <h5 className="card-title m-2">{item.name.toUpperCase()}</h5>
                  <p className="card-text mt-3">
                    Cost: {item.price} (tax included)
                  </p>{" "}
                  <p className="card-text">Quantity: {item.count}</p>{" "}
                  <div className="text-end">
                    <button
                      onClick={() => removeItem(index)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="container-fluid d-flex justify-content-end">
          <div className="col-sm-3 mt-3 total-card">
            <div className="card text-light text-center">
              <div className="card-body">
                <h5 className="card-title m-2">Total</h5>
                <p className="card-text mt-3">Total Price: {totalPrice} </p>
                <button className="btn btn-success" onClick={placeOrder}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CartLayout;
