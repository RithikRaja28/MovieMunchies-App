import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeLayout from "./components/HomeLayout";
import { Route, Routes } from "react-router";
import PreLoaderComponent from "./components/PreLoaderComponent";

function App() {
  return (
    <>
      <PreLoaderComponent />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </>
  );
}

export default App;
