import React from "react";
import "./tabs.css";

const Tabs = props => {
  const tabs = [
    { className: "motivationalDiv", text: "Motivational" },
    { className: "humorDiv", text: "Humor" },
    { className: "positiveDiv", text: "Positive" },
    { className: "leadershipDiv", text: "Leadership" },
    { className: "wisdomDiv", text: "Wisdom" }
  ];

  return (
    <div className="tab-container">
      {tabs.map(classes => {
        return (
          <div onClick={props.handleClick} className={classes.className}>
            {classes.text}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
