import React from "react";

const Tabs = props => {
  const tabs = [
    { className: "motivationalDiv", text: "Motivational Quotes" }
    // { className: "eventsDiv", text: "Events" },
    // { className: "anniversariesDiv", text: "Anniversaries" },
    // { className: "brandysCornerDiv", text: "Brandys Corner" },
    // { className: "placesDiv", text: "Places" },
    // { className: "hobbiesDiv", text: "Hobbies" },
    // { className: "booksDiv", text: "Books" }
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
