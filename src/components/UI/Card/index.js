import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card" style={{ width: props.width }} {...props}>
      {props.children}
    </div>
  );
};

export default Card;
