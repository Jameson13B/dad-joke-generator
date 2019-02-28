import React, { Component } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: "",
      theme: "day",
      copied: false
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
  handleOnCopy = () => {
    this.setState({ copied: true });
    setTimeout(() => this.setState({ copied: false }), 1000);
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
            {this.state.copied ? <p className="copied-modal">Copied!</p> : null}
          </div>
          {/* This container holds the NEW button */}
          <div className="left-container btn" onClick={this.handleJoke}>
            NEW
          </div>
          {/* This container holds the COPY button */}
          <CopyToClipboard
            text={this.state.joke.joke}
            onCopy={this.handleOnCopy}
          >
            <div className="right-container btn">COPY</div>
          </CopyToClipboard>
        </header>
      </div>
    );
  }
}

export default App;
