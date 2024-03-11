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
          <div className="col text-end p-4 ms-3 mt-5">
            <nav class="navbar navbar-dark " style={{ background: "#000" }}>
              <form class="form-inline text-light d-flex">
                <input
                  class="form-control mr-sm-2 searchinput text-dark"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  title="Search"
                />

                <button
                  class="btn btn-outline-danger my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </nav>
          </div>
          <div className="col text-end p-4 ms-3 mt-5">
            <button className="cart-btn mt-3">
              <img
                src="trolley.png"
                alt="cart"
                width={30}
                title="Order items"
              />
              <span class="badge items-cart">5</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div class="row">
          <div class="col-sm-3">
            <div class="card text-light text-center">
              <div class="card-body">
                <img
                  src="3-combo-juices.png"
                  className="card-img-top itemimage"
                  alt=""
                />
                <h5 class="card-title m-2">Beverages</h5>
                <p class="card-text">3 Combos*</p>
                <div className="text-end">
                  <a href="#" class="btn btn-danger">
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card text-light text-center">
              <div class="card-body">
                <img
                  src="popcorn-coke.jpg"
                  className="card-img-top itemimage"
                  alt=""
                />
                <h5 class="card-title m-2">Popcorn + Coke</h5>
                <p class="card-text">Special offer Available *</p>
                <div className="text-end">
                  <a href="#" class="btn btn-danger">
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card text-light text-center">
              <div class="card-body">
                <img
                  src="Samosa-pic.jpg"
                  className="card-img-top itemimage"
                  alt=""
                />
                <h5 class="card-title">Chilli Sauce - Samosa</h5>
                <p class="card-text mt-3">9.pcs of Samosa + Chilli Sause</p>
                <div className="text-end">
                  <a href="#" class="btn btn-danger">
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card text-light text-center">
              <div class="card-body">
                <img
                  src="burger-fries.jpg"
                  className="card-img-top itemimage"
                  alt=""
                />
                <h5 class="card-title m-2">Chicken Burger + French Fries</h5>
                <p class="card-text mt-2">[Chicken , Mutton] Burger *</p>
                <div className="text-end">
                  <a href="#" class="btn btn-danger">
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mt-3">
            <div class="card text-light text-center">
              <div class="card-body">
                <img
                  src="Kid-kits.jpg"
                  className="card-img-top itemimage"
                  alt=""
                />
                <h5 class="card-title m-2">Kids Pack Combo</h5>
                <p class="card-text mt-3">Ice Cola + Candies + Sweet Popcorn</p>
                <div className="text-end">
                  <a href="#" class="btn btn-danger">
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mt-3">
            <div class="card text-light text-center">
              <div class="card-body">
                <img
                  src="mixture-snack.jpg"
                  className="card-img-top itemimage"
                  alt=""
                />
                <h5 class="card-title m-2">Chat - Mixture</h5>
                <p class="card-text mt-3">
                  Indian Style Mixture [Spicy , Sour]
                </p>
                <div className="text-end">
                  <a href="#" class="btn btn-danger">
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
