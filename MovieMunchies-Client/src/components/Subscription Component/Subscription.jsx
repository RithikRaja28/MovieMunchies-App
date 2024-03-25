import React from "react";
import NavbarLayout from "../Navbar Component/NavbarLayout";
import "./subscription.css";
import MovingComponent from "react-moving-text";
const Subscription = () => {
  return (
    <div>
      <div>
        <NavbarLayout />
      </div>
      <div className="container-fluid d-flex justify-content-end align-items-end mt-5">
        <button class="button btns btn btn-danger mt-5 text-center shake sticky">
          Get pro now 💵
        </button>
      </div>
      <div className="text-center">
        <p className="display-5 mt-4  text-light">Subscription Plans</p>
        <q className="text-secondary">
          Movie Munchies provides elegant way to Entertain the People
        </q>
      </div>
      <div className="container-sm-2 mt-5 d-flex justify-content-center ">
        <MovingComponent
          type="popIn"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <div class="pack-container m-2">
            <div class="header">
              <p class="title">Starter</p>
              <div class="price-container">
                <span>$</span>299
                <span>/mo</span>
              </div>
            </div>
            <div>
              <ul class="lists">
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>500 watch seats</p>
                </li>
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>500 components</p>
                </li>
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>2 month free updates</p>
                </li>
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>2yrs technical support</p>
                </li>
              </ul>
            </div>
            <div class="button-container">
              <button type="button btn btn-danger">Buy Now</button>
            </div>
          </div>
        </MovingComponent>
      </div>
      <div className="container-sm-2 mt-5 d-flex justify-content-center">
        <MovingComponent
          type="popIn"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <div class="pack-container m-2">
            <div class="header">
              <p class="title">Entertainment</p>
              <div class="price-container">
                <span>$</span>799
                <span>/mo</span>
              </div>
            </div>
            <div>
              <ul class="lists">
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>1500 watch seats</p>
                </li>
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>1500 components</p>
                </li>
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>6 month free updates</p>
                </li>
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>4.5yrs technical support</p>
                </li>
              </ul>
            </div>
            <div class="button-container">
              <button type="button btn btn-danger">Buy Now</button>
            </div>
          </div>
        </MovingComponent>
      </div>
      <div className="container-sm-2 mt-5 d-flex justify-content-center">
        <MovingComponent
          type="popIn"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <div class="pack-container m-2">
            <div class="header">
              <p class="title">Entertainment Pro</p>
              <div class="price-container">
                <span>$</span>9999
                <span>/mo</span>
              </div>
            </div>
            <div>
              <ul class="lists">
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>1999 watch seats</p>
                </li>
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>2000 components</p>
                </li>
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>12 month free updates</p>
                </li>
                <li class="list">
                  <span>
                    <svg
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>Life Time technical support</p>
                </li>
              </ul>
            </div>
            <div class="button-container">
              <button type="button btn btn-danger">Buy Now</button>
            </div>
          </div>
        </MovingComponent>
      </div>
    </div>
  );
};

export default Subscription;
