import React from "react";
import "./wisdom.css";
import PropTypes from "prop-types";

const Wisdom = props => {
  return (
    <div className={props.className}>
      <p>Wisdom Quotes</p>

      <div>
        {
          props.quotes[4].wisdom[
            Math.floor(Math.random() * (props.quotes.length - 1))
          ].quote
        }
      </div>
    </div>
  );
};

Wisdom.protoTypes = {
  quotes: PropTypes.array.isRequired
};

export default Wisdom;
