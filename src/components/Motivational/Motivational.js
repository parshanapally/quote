import React from "react";
import "./motivational.css";
import PropTypes from "prop-types";

const Motivational = props => {
  return (
    <div className={props.className}>
      <p>Motivational Quotes</p>

      <div className="quote-container">
        {
          props.quotes[0].motivation[
            Math.floor(Math.random() * (props.quotes.length - 1))
          ].quote
        }
      </div>
    </div>
  );
};

Motivational.protoTypes = {
  quotes: PropTypes.array.isRequired
};
export default Motivational;
