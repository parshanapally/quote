import React from "react";
import "./home.css";

const Home = props => {
  return (
    <div className={props.className}>
      <h1>
        Daily Dose of <span>Quotes</span>
      </h1>
      <p>Need something to get you through the day?</p>
    </div>
  );
};

export default Home;
