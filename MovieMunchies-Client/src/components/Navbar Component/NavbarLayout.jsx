import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";
const NavbarLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav
        class="navbar fixed-top"
        style={{ background: "#000" }}
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <img
            src="popcorn_image.png"
            alt="moviemunchies-logo"
            style={{ width: "40px", height: "40px" }}
          />
          <a class="navbar-brand" href="#">
            Movie Munchies
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ background: "#000" }}
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Movie Munchies
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <form class="d-flex mt-3 mb-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Admin
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About Product
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Buy Product
                  </a>
                </li>
              </ul>
              <div className="text-center">
                <button onClick={()=>{navigate("/")}} className="bg-danger btn rounded-pill admin-logout">
                  Admin Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLayout;
