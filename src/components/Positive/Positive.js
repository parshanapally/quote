import React from "react";
import "./positive.css";
import PropTypes from "prop-types";

const Positive = props => {
  return (
    <div className={props.className}>
      <p>Positive Quotes</p>

      <div className="quote-container">
        {
          props.quotes[2].positive[
            Math.floor(Math.random() * (props.quotes.length - 1))
          ].quote
        }
      </div>
    </div>
  );
};

Positive.protoTypes = {
  quotes: PropTypes.array.isRequired
};

export default Positive;
