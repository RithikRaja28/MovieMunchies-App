import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeLayout from "./components/HomeComponent/HomeLayout";
import { Route, Routes } from "react-router";
import PreLoaderComponent from "./components/preloader/PreLoaderComponent";
import LoginLayout from "./components/Login Component/LoginLayout";
import AdminLayout from "./components/Adminpage Component/AdminLayout";
import Signup from "./Signup";

function App() {
  return (
    <>
      <PreLoaderComponent />
      <Routes>
        <Route path="/MM-login" element={<LoginLayout />} />
        <Route path="/" index element={<Signup />}></Route>
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </>
  );
}

export default App;
