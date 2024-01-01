import React from "react";
import angle from "./assets/angle_border.svg";
import tops from "./assets/tops.svg";
import line from "./assets/line.svg";
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

      <div className="middle_deco_container">
        <img className="top" src={tops} alt="tops_deco" />
      </div>

      <div className="res_title_container">
        <span className="restaurant_name">DAAWAT </span>
      </div>

      <div className="res_desc_container">
        <span className="restaurant_desc">FAMILY RESTAURANT</span >
      </div>

      <div className="bottom_deco_container">
        <img className="bottom" src={tops} alt="tops_deco" />
      </div>

      <div className="left_line_container">
        <img alt="line" src={line} className="line_left" />
      </div>
      <div className="right_line_container">
        <img alt="line" src={line} className="line_right" />
      </div>
    </div>
  );
};

export default App;
