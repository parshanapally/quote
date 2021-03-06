import React from "react";
import "./leadership.css";
import PropTypes from "prop-types";

const Leadership = props => {
  return (
    <div className={props.className}>
      <h1>
        Leadership <span>Quotes</span>
      </h1>
      <div className="quote-container">
        {
          props.quotes[3].leadership[
            Math.floor(Math.random() * (props.quotes.length - 1))
          ].quote
        }
      </div>
    </div>
  );
};

Leadership.protoTypes = {
  quotes: PropTypes.array.isRequired
};

export default Leadership;
