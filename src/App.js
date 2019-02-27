import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: "",
      theme: "day"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-content">
          <div className="top-container">
            {this.state.joke ? this.state.joke : "Joke goes here..."}
          </div>
          <div className="left-container btn">NEW</div>
          <div className="right-container btn">COPY</div>
        </header>
      </div>
    );
  }
}

export default App;
