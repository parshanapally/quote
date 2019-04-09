import React from "react";
import "./motivational.css";
const Motivational = props => {
  console.log(props);
  return (
    <div className={props.className}>
      <p>Motivational</p>
    </div>
  );
};

export default Motivational;
