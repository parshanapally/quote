import React from "react";
import "./positive.css";
import PropTypes from "prop-types";

const Positive = props => {
  return (
    <div className={props.className}>
      <h1>
        Positive <span>Quotes</span>
      </h1>

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
