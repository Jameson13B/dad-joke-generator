import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: "",
      theme: "day"
    };
  }
  componentDidMount() {
    this.handleJoke();
  }
  handleJoke = () => {
    const url = "https://icanhazdadjoke.com/";
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    axios
      .get(url, config)
      .then(res => {
        this.setState({
          joke: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <header className="App-content">
          {/* This container holds the joke from the state */}
          <div className="top-container">
            {this.state.joke ? this.state.joke.joke : "Loading joke..."}
          </div>
          {/* This container holds the title and the signature */}
          <div className="title-container">
            <h1>Dad Jokes</h1>
            <p className="sig">
              Web App by{" "}
              <a href="https://jamesonb.com/" target="_blanks">
                Jameson Brown
              </a>
            </p>
          </div>
          {/* This container holds the NEW button */}
          <div className="left-container btn" onClick={this.handleJoke}>
            NEW
          </div>
          {/* This container holds the COPY button */}
          <div
            className="right-container btn"
            onClick={() => alert("Copy to clipboard feature coming soon")}
          >
            COPY
          </div>
        </header>
      </div>
    );
  }
}

export default App;

// TODO:
// Copy to clipboard button
