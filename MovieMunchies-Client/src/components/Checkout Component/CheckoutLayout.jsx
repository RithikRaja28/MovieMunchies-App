import React from "react";
import NavbarLayout from "../Navbar Component/NavbarLayout";

const CheckoutLayout = () => {
  return (
    <div>
      <header>
        <NavbarLayout />
      </header>
      <div className="container text-light">
        <div className="row">
          <div className="col m-4">
            <h3 className="h3 mb-3">Checkout</h3>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
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
                      <label for="exampleFormControlInput1" class="form-label">
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
                      <label for="exampleFormControlInput1" class="form-label">
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
              <div class="accordion-item mt-2">
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
                      <label for="exampleFormControlInput1" class="form-label">
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
                      <label for="exampleFormControlInput1" class="form-label">
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
            </div>
          </div>
          <div className="col">
            <h2>Test</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;
