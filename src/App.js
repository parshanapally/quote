import React, { Component, Fragment } from "react";
import { fetchQuotes } from "./services/fetchQuotes";
import Motivational from "./components/Motivational/Motivational";
import Tabs from "./components/Tabs/Tabs";
import classNames from "classnames";
import Humor from "./components/Humor/Humor";
import Positive from "./components/Positive/Positive";
import Leadership from "./components/Leadership/Leadership";
import Wisdom from "./components/Wisdom/Wisdom";
import Home from "./components/Home/Home";
class App extends Component {
  state = {
    filteredQuotes: [],
    quotes: [],
    isActive: "home",
    doneLoading: false
  };
  componentDidMount() {
    fetchQuotes().then(res => {
      // console.log(res);
      this.setState({
        quotes: res,
        doneLoading: true
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
    } else if (e.target.className === "homeDiv") {
      this.setState({
        isActive: "home"
      });
    }
  };

  render() {
    return (
      <div>
        <Tabs
          state={this.state.filteredQuotes}
          handleClick={this.handleClick}
        />

        {this.state.doneLoading ? (
          <Fragment>
            {" "}
            <Home
              className={classNames("homeLink", {
                active: this.state.isActive === "home"
              })}
            />
            <Motivational
              className={classNames("motivationalLink", {
                active: this.state.isActive === "motivational"
              })}
              quotes={this.state.quotes}
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
          </Fragment>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
