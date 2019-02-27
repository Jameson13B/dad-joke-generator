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
          <div className="top-container">
            {this.state.joke ? this.state.joke.joke : "Joke goes here..."}
          </div>

          <div className="title-container">
            <h1>Dad Jokes</h1>
            <p className="sig">
              Web App by{" "}
              <a href="https://jamesonb.com/" target="_blanks">
                Jameson Brown
              </a>
            </p>
          </div>

          <div className="left-container btn" onClick={this.handleJoke}>
            NEW
          </div>

          <div className="right-container btn">COPY</div>
        </header>
      </div>
    );
  }
}

export default App;
