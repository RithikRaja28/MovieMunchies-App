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
            <button>d</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
