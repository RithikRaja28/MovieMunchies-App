import React from "react";
import NavbarLayout from "../Navbar Component/NavbarLayout";
import "./Checkout.css";
import { useLocation } from "react-router-dom";
const CheckoutLayout = () => {
  const location = useLocation();
  const { state } = location;

  const cartItems = state && state.cartItems ? state.cartItems : [];

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  console.log("CartItems in CheckoutLayout:", cartItems);
  return (
    <div>
      <header>
        <NavbarLayout />
      </header>
      <div className="container text-light">
        <div className="row">
          <div className="col m-3 checkout">
            <hr />
            <h4 className="h4 mb-3">Checkout :</h4>
            <hr />
            <div className="mb-5 p-4">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item mb-3">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Contact Information
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text-light">
                      <div class="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div class="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>

                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                          Instructions
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Your comments"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item mt-3">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Delivery Options
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text-light">
                      <div class="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Screen
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Your screen number"
                        />
                      </div>
                      <div class="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Seat Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Your seat number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item mt-3">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Payment Method
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body text-light">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          class="form-check-label"
                          for="inlineCheckbox1"
                          className="ms-2"
                        >
                          <img
                            src="/Payment icons/paypal.png"
                            alt=""
                            className=""
                            width={40}
                          />
                          <span className="ms-2">Pay with PayPal</span>
                        </label>
                      </div>
                      <hr />
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          class="form-check-label"
                          for="inlineCheckbox1"
                          className="ms-2"
                        >
                          <img
                            src="/Payment icons/credit-card.png"
                            alt=""
                            width={35}
                          />
                          <span className="ms-2">Credit Card / Debit Card</span>
                        </label>
                      </div>
                      <hr />
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          class="form-check-label"
                          for="inlineCheckbox1"
                          className="ms-2"
                        >
                          <img
                            src="/Payment icons/cashless-payment.png"
                            alt=""
                            width={35}
                          />
                          <span className="ms-2">Pay with UPI</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <code>Enjoy your food !!</code>
            </div>
          </div>

          <div className="col m-3">
            <hr />
            <h4 className="h4">Order Summary :</h4>
            <hr />
            {cartItems.map((item, index) => (
              <div key={index}>
                <p>
                  {item.name}: ₹ {item.price} <br />
                  Quantity (in nos): {item.count}
                </p>
              </div>
            ))}
            <div className="d-flex mt-5">
              <p className="m-2">Total Price: ₹ {totalPrice}</p>
            </div>
            <div className="text-center">
              <button className="btn btn-success mt-2">Confirm Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;