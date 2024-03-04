import React, { useEffect } from "react";
import "./PreLoader.css";
import { preLoaderAnim } from "../animations";
const PreLoaderComponent = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <>
      <div className="preloader">
        <div className="texts-container">
          <span className="m-1">Watch 🎥</span>
          <span className="m-1">Food 🍿</span>
          <span className="m-1">Repeat 🔁</span>
        </div>
      </div>
    </>
  );
};

export default PreLoaderComponent;
