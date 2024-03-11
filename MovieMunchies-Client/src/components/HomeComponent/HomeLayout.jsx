import React from "react";
import NavbarLayout from "../Navbar Component/NavbarLayout";
import "./Home.css";
const HomeLayout = () => {
  return (
    <div>
      <div className="container-fluid m-2">
        <NavbarLayout />
      </div>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col text-end p-4 ms-3 mt-4">
            <button className="cart-btn mt-3">
              <img src="trolley.png" alt="cart" width={30} />
              <span class="badge items-cart">5</span>
            </button>
          </div>
          {/* Need to change */}
          <div className="col text-end p-4 ms-3 mt-4">
            <button className="cart-btn mt-3">
              <img src="trolley.png" alt="cart" width={30} />
              <span class="badge items-cart">5</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
