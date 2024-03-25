import React, { useState } from "react";
import CartLayout from "../Cart Component/CartLayout";
import NavbarLayout from "../Navbar Component/NavbarLayout";
import "./Home.css";
import { useNavigate } from "react-router";
import MovingComponent from "react-moving-text";
const HomeLayout = ({ addToCart, prices }) => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [itemCounts, setItemCounts] = useState({
    beverages: 0,
    popcornCoke: 0,
    chilliSauceSamosa: 0,
    burgerFries: 0,
    kidsPackCombo: 0,
    chatMixture: 0,
    veganMomos: 0,
    paaniPuriChat: 0,
    choclateIcecream: 0,
    chociBrownieVanillaIceCream: 0,
    chocoVanillaIceCream: 0,
    oreoStrawberryCupCakes: 0,
  });
  const addItemEvent = (foodItem) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [foodItem]: prevCounts[foodItem] + 1,
    }));
    setCartCount((prevCount) => prevCount + 1);
    const count = itemCounts[foodItem] + 1; // Update count
    const price = prices[foodItem] * count; // Calculate price
    addToCart(
      {
        name: foodItem,
        image: `${foodItem}.jpg`,
        price: price,
      },
      count
    ); // Pass both item and count to addToCart
  };
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
            <button
              className="cart-btn mt-3"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <img
                src="trolley.png"
                alt="cart"
                width={30}
                title="Order items"
              />
              <span class="badge items-cart">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>
       <MovingComponent
            type="fadeInFromBottom"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
      <div className="container-fluid">
        <div class="row">
          <h6 className="text-light mb-3 mt-3 h6">Recommed Food 🍿: </h6>
         
            <div class="col-sm-3">
              <div class="card text-light text-center">
                <div class="card-body">
                  <img
                    src="3-combo-juices.png"
                    className="card-img-top itemimage"
                    alt=""
                  />
                  <h5 class="card-title m-2">Beverages</h5>
                  <p class="card-text">Special Combo Available * [3 Combo]</p>
                  <div className="text-end">
                    <span class="card-text h5 m-2">299/-</span>
                    <button
                      onClick={() => addItemEvent("beverages")}
                      class="btn btn-danger"
                    >
                      Add ＋
                    </button>
                    <span className="m-2"> {itemCounts.beverages} items</span>
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
                    <span class="card-text h5 m-2">480/-</span>
                    <button
                      class="btn btn-danger"
                      onClick={() => addItemEvent("popcornCoke")}
                    >
                      Add ＋
                    </button>
                    <span className="m-2"> {itemCounts.popcornCoke} items</span>
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
                    <span class="card-text h5 m-2">112/-</span>
                    <button
                      onClick={() => {
                        addItemEvent("chilliSauceSamosa");
                      }}
                      class="btn btn-danger"
                    >
                      Add ＋
                    </button>
                    <span className="m-2">
                      {" "}
                      {itemCounts.chilliSauceSamosa} items
                    </span>
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
                  <p class="card-text mt-2">[Chicken , Mutton]</p>
                  <div className="text-end">
                    <span class="card-text h5 m-2">300/-</span>
                    <button
                      onClick={() => {
                        addItemEvent("burgerFries");
                      }}
                      class="btn btn-danger"
                    >
                      Add ＋
                    </button>
                    <span className="m-2"> {itemCounts.burgerFries} items</span>
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
                  <p class="card-text mt-3">
                    Ice Cola + Candies + Sweet Popcorn
                  </p>
                  <div className="text-end">
                    <span class="card-text h5 m-2">499/-</span>
                    <button
                      onClick={() => {
                        addItemEvent("kidsPackCombo");
                      }}
                      className="btn btn-danger"
                    >
                      Add ＋
                    </button>
                    <span className="m-2">
                      {" "}
                      {itemCounts.kidsPackCombo} items
                    </span>
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
                    <span class="card-text h5 m-2">80/-</span>
                    <button
                      onClick={() => {
                        addItemEvent("chatMixture");
                      }}
                      className="btn btn-danger"
                      class="btn btn-danger"
                    >
                      {" "}
                      Add ＋
                    </button>
                    <span className="m-2"> {itemCounts.chatMixture} items</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mt-3">
              <div class="card text-light text-center">
                <div class="card-body">
                  <img
                    src="easy-vegan-momos.jpg"
                    className="card-img-top itemimage"
                    alt=""
                  />
                  <h5 class="card-title m-2">Vegan Momos</h5>
                  <p class="card-text mt-3">
                    Veggie Vegan momos [Fine Vegetables]
                  </p>
                  <div className="text-end">
                    <span class="card-text h5 m-2">119/-</span>
                    <button
                      onClick={() => {
                        addItemEvent("veganMomos");
                      }}
                      class="btn btn-danger"
                    >
                      Add ＋
                    </button>
                    <span className="m-2"> {itemCounts.veganMomos} items</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mt-3">
              <div class="card text-light text-center">
                <div class="card-body">
                  <img
                    src="pani-puri.jpg"
                    className="card-img-top itemimage"
                    alt=""
                  />
                  <h5 class="card-title m-2">Paani Puri - Chat</h5>
                  <p class="card-text mt-3">
                    [Spicy,Sweet] Paani + Cruncy puri
                  </p>
                  <div className="text-end">
                    <span class="card-text h5 m-2">50/-</span>
                    <button
                      onClick={() => {
                        addItemEvent("paaniPuriChat");
                      }}
                      class="btn btn-danger"
                    >
                      Add ＋
                    </button>
                    <span className="m-2">
                      {" "}
                      {itemCounts.paaniPuriChat} items
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mt-3">
              <div class="card text-light text-center">
                <div class="card-body">
                  <img
                    src="ice-cream.jpg"
                    className="card-img-top itemimage"
                    alt=""
                  />
                  <h5 class="card-title m-2">Choclate Icecream</h5>
                  <p class="card-text mt-3">
                    Special Combo Available * [+ Brownie , Fruit, IceCream]
                  </p>
                  <div className="text-end">
                    <span class="card-text h5 m-2">150/-</span>
                    <button
                      onClick={() => {
                        addItemEvent("choclateIcecream");
                      }}
                      class="btn btn-danger"
                    >
                      Add ＋
                    </button>
                    <span className="m-2">
                      {" "}
                      {itemCounts.choclateIcecream} items
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mt-3">
              <div class="card text-light text-center">
                <div class="card-body">
                  <img
                    src="browie-icecream.jpg"
                    className="card-img-top itemimage"
                    alt=""
                  />
                  <h5 class="card-title m-2">
                    Choci Brownie + Vanilla IceCream
                  </h5>
                  <p class="card-text mt-3">Special Combo Available*</p>
                  <div className="text-end">
                    <span class="card-text h5 m-2">200/-</span>
                    <button
                      onClick={() => {
                        addItemEvent("chociBrownieVanillaIceCream");
                      }}
                      class="btn btn-danger"
                    >
                      Add ＋
                    </button>

                    <span className="m-2">
                      {" "}
                      {itemCounts.chociBrownieVanillaIceCream} items
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mt-3">
              <div class="card text-light text-center">
                <div class="card-body">
                  <img
                    src="vanilla-icecream.jpg"
                    className="card-img-top itemimage"
                    alt=""
                  />
                  <h5 class="card-title m-2">
                    Chocolate Drizzle + Vanilla IceCream
                  </h5>
                  <p class="card-text mt-3">Special Combo Available*</p>
                  <div className="text-end">
                    <span class="card-text h5 m-2">199/-</span>
                    <button
                      onClick={() => {
                        addItemEvent("chocoVanillaIceCream");
                      }}
                      class="btn btn-danger"
                    >
                      Add ＋
                    </button>
                    <span className="m-2">
                      {" "}
                      {itemCounts.chocoVanillaIceCream} items
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mt-3">
              <div class="card text-light text-center">
                <div class="card-body">
                  <img
                    src="Chocolate-sandwich-cupcakes.jpg"
                    className="card-img-top itemimage"
                    alt=""
                  />
                  <h5 class="card-title m-2">Oreo + Strawberry CupCakes</h5>
                  <p class="card-text mt-3">
                    Special Combo Available* [Strawberry,Choci]
                  </p>
                  <div className="text-end">
                    <span class="card-text h5 m-2">290/-</span>
                    <button
                      onClick={() => {
                        addItemEvent("oreoStrawberryCupCakes");
                      }}
                      href="#"
                      class="btn btn-danger"
                    >
                      Add ＋
                    </button>
                    <span className="m-2">
                      {" "}
                      {itemCounts.oreoStrawberryCupCakes} items
                    </span>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
      </MovingComponent>
      <div className="container-fluid mt-5">
        <div className="text-center">
          <p className="text-light mt-3">
            Want to Order from other Restaurants ?
          </p>
          <button
            className="btn btn-warning rounded-pill"
            onClick={() => {
              alert(
                "This Function is under Construction \nStay Healthy 🍿 \n\n\t\t -MovieMunchies"
              );
            }}
          >
            More Food 🥤
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
