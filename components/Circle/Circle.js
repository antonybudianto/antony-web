import React from "react";
import circle from "./Circle.module.css";

function Circle(props) {
  return <div className={circle.circle} {...props}></div>;
}

export default Circle;
