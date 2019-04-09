import React, { Component } from "react";
import { fetchQuotes } from "./services/fetchQuotes";
import Motivational from "./components/Motivational/Motivational";
import Tabs from "./components/Tabs/Tabs";
import classNames from "classnames";
import Humor from "./components/Humor/Humor";
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
    if (e.target.className === "motivationalDiv") {
      this.setState({
        isActive: "motivational"
      });
    } else if (e.target.className === "humorDiv") {
      this.setState({
        isActive: "humor"
      });
    }
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
        <Humor
          className={classNames("humorLink", {
            active: this.state.isActive === "humor"
          })}
        />
      </div>
    );
  }
}

export default App;
