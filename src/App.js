import React, { Component } from "react";
import Header from "./Header";
import { getAllCopy, getCopyForComponent } from "./copyHandling";

class App extends Component {
  state = {
    copy: null
  };

  componentDidMount() {
    getAllCopy().then(copy => this.setState({ copy }));
  }

  render() {
    const { copy } = this.state;
    if (!copy) return null;

    console.log(copy);
    return (
      <div className="app">
        <Header copy={getCopyForComponent(copy, "Header").copies} />
      </div>
    );
  }
}

export default App;
