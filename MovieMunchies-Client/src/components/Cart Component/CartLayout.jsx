import React from "react";
import NavbarLayout from "../Navbar Component/NavbarLayout";

const CartLayout = ({ cartItems, removeItem }) => {
  return (
    <div>
      <div className="container-fluid m-2">
        <NavbarLayout />
      </div>
      <div className="container-fluid">
        <div class="row">
          {cartItems.map((item, index) => (
            <div class="col-sm-3 mt-3" key={index}>
              <div class="card text-light text-center">
                <div class="card-body">
                  <img
                    src={item.image}
                    className="card-img-top itemimage"
                    alt={item.name}
                  />
                  <h5 class="card-title m-2">{item.name}</h5>
                  <p class="card-text mt-3">{item.price}</p>
                  <div className="text-end">
                    <button
                      onClick={() =>
                        removeItem(
                          cartItems.findIndex((i) => i.name === item.name)
                        )
                      }
                      class="btn btn-danger"
                    >
                      Remove ＋
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
