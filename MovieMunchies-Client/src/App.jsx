import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeLayout from "./components/HomeComponent/HomeLayout";
import { Route, Routes } from "react-router";
import PreLoaderComponent from "./components/preloader/PreLoaderComponent";
import LoginLayout from "./components/Login Component/LoginLayout";
import AdminLayout from "./components/Adminpage Component/AdminLayout";
import Signup from "./Signup";
import CartLayout from "./components/Cart Component/CartLayout";
import Subscription from "./components/Subscription Component/Subscription";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, count, price) => {
    setCartItems((prevItems) => [...prevItems, { ...item, count, price }]);
    console.log(
      "Adding Food item: ",
      item,
      " with count:",
      count,
      "and price:",
      price
    );
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const prices = {
    beverages: 299,
    popcornCoke: 480,
    chilliSauceSamosa: 112,
    burgerFries: 300,
    kidsPackCombo: 499,
    chatMixture: 80,
    veganMomos: 119,
    paaniPuriChat: 50,
    choclateIcecream: 150,
    chociBrownieVanillaIceCream: 200,
    chocoVanillaIceCream: 199,
    oreoStrawberryCupCakes: 290,
  };

  return (
    <>
      <PreLoaderComponent />
      <Routes>
        <Route path="/MM-login" element={<LoginLayout />} />
        <Route path="/" index element={<Signup />}></Route>
        <Route
          path="/home"
          element={<HomeLayout addToCart={addToCart} prices={prices} />}
        />
        <Route path="/admin" element={<AdminLayout />} />
        <Route
          path="/cart"
          element={<CartLayout items={cartItems} removeItem={removeItem} />}
        />
        <Route path="/MM-subscription" element={<Subscription />} />
      </Routes>
    </>
  );
}

export default App;
