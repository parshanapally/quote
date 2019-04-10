import React from "react";
import "./positive.css";

const Positive = props => {
  console.log(props);
  return (
    <div className={props.className}>
      <p>Positive Quotes</p>

      <div>
        {
          props.quotes[2].positive[
            Math.floor(Math.random() * (props.quotes.length - 1))
          ].quote
        }
      </div>
    </div>
  );
};

export default Positive;
