import React from "react";
import NavbarLayout from "../Navbar Component/NavbarLayout";

const CartLayout = ({ cartItems, removeItem }) => {
  return (
    <div>
      <div className="container-fluid m-2">
        <NavbarLayout />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          {cartItems.map((item, index) => (
            <div className="col-sm-3 mt-3" key={index}>
              <div className="card text-light text-center">
                <div className="card-body">
                  <img
                    src={item.image}
                    className="card-img-top itemimage"
                    alt={item.name}
                  />
                  <h5 className="card-title m-2">{item.name}</h5>
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
    </div>
  );
};

export default CartLayout;
