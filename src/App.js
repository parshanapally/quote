import React, { Component } from "react";
import { fetchQuotes } from "./services/fetchQuotes";
import Motivational from "./components/Motivational/Motivational";
import Tabs from "./components/Tabs/Tabs";
import classNames from "classnames";
class App extends Component {
  state = {
    filteredQuotes: [],
    quotes: [],
    isActive: ""
  };
  componentDidMount() {
    fetchQuotes().then(res => {
      console.log(res);
      this.setState({
        filteredQuotes: res,
        quotes: res
      });
    });
  }

  handleClick = e => {
    if (e.target.className === "motivationalDiv")
      this.setState({
        isActive: "motivational"
      });
  };
  render() {
    return (
      <div>
        <Tabs handleClick={this.handleClick} />
        <Motivational
          className={classNames("motivationalLink", {
            active: this.state.isActive === "motivational"
          })}
        />
      </div>
    );
  }
}

export default App;
