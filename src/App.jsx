import React from "react";
import angle from "./assets/angle_border.svg";
import tops from "./assets/tops.svg";
import "./App.css";
const App = () => {
  return (
    <div className="main">
      <div className="angle_container_left">
        <img src={angle} alt="angle" className="angle" />
      </div>

      <div className="agnle_container_right">
        <img src={angle} alt="angle" className="flipped" />
      </div>

      <div className="middle_deco">
        <img className="tops" src={tops} alt="tops_deco" />
      </div>

      <div className="middle_deco">
        <img className="title_bottom_deco" src={tops} alt="tops_deco" />
      </div>

      <div className="res_title">
        <p className="restaurant_name">DAAWAT </p>
      </div>

      <div className="res_desc_container">
        <p className="restaurant_desc">FAMILY RESTAURANT</p>
      </div>
    </div>
  );
};

export default App;
