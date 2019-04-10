import React from "react";
import "./humor.css";
import PropTypes from "prop-types";

const Humor = props => {
  return (
    <div className={props.className}>
      <p>Humor Quotes</p>

      <div>
        {
          props.quotes[1].humor[
            Math.floor(Math.random() * (props.quotes.length - 1))
          ].quote
        }
      </div>
    </div>
  );
};

Humor.protoTypes = {
  quotes: PropTypes.array.isRequired
};

export default Humor;
