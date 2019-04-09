import React, { Component } from "react";
import { fetchQuotes } from "./services/fetchQuotes";
import Motivational from "./components/Motivational/Motivational";

class App extends Component {
  state = {
    filteredQuotes: [],
    quotes: []
  };
  componentDidMount() {
    fetchQuotes().then(res => {
      console.log(res);
      this.setState({
        filteredQuotes: this.state.filteredQuotes,
        quotes: res
      });
    });
  }
  render() {
    return (
      <div>
        <Motivational state={this.state.quotes} />
      </div>
    );
  }
}

export default App;
