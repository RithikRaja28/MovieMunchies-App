import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeLayout from "./components/HomeComponent/HomeLayout";
import { Route, Routes } from "react-router";
import PreLoaderComponent from "./components/preloader/PreLoaderComponent";
import LoginLayout from "./components/Login Component/LoginLayout";

function App() {
  return (
    <>
      <PreLoaderComponent />
      <Routes>
        <Route path="/" element={<LoginLayout />} />
        <Route path="/home" element={<HomeLayout />} />
      </Routes>
    </>
  );
}

export default App;
