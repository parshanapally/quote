import React, { Component } from "react";
import { fetchQuotes } from "./services/fetchQuotes";

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
    return <div>Hello</div>;
  }
}

export default App;
