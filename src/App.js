import React, { Component } from "react";
import { fetchQuotes } from "./services/fetchQuotes";
import Motivational from "./components/Motivational/Motivational";
import Tabs from "./components/Tabs/Tabs";
import classNames from "classnames";
import Humor from "./components/Humor/Humor";
import Positive from "./components/Positive/Positive";
import Leadership from "./components/Leadership/Leadership";
import Wisdom from "./components/Wisdom/Wisdom";
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
    } else if (e.target.className === "positiveDiv") {
      this.setState({
        isActive: "positive"
      });
    } else if (e.target.className === "leadershipDiv") {
      this.setState({
        isActive: "leadership"
      });
    } else if (e.target.className === "wisdomDiv") {
      this.setState({
        isActive: "wisdom"
      });
    }
  };

  handleFilter = () => {
    const quotes = this.state.quotes;
    console.log(quotes);

    quotes.map(quote => {
      console.log(quote);
      return quote;
    });
  };
  render() {
    return (
      <div>
        <Tabs handleFilter={this.handleFilter} handleClick={this.handleClick} />
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

        <Positive
          className={classNames("positiveLink", {
            active: this.state.isActive === "positive"
          })}
        />

        <Leadership
          className={classNames("leadershipLink", {
            active: this.state.isActive === "leadership"
          })}
        />

        <Wisdom
          className={classNames("wisdomLink", {
            active: this.state.isActive === "wisdom"
          })}
        />
      </div>
    );
  }
}

export default App;
