import React from "react";
import ReactDOM from "react-dom";

import Component from './Component/Component'

import "./index.css";

const Container = () => {
  return (
    <div className="container">
      <Component/>
    </div>
  );
};

ReactDOM.render(<Container />, document.getElementById("root"));
