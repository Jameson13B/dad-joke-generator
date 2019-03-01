import React, { Component } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  TopContainer,
  TitleContainer,
  Button,
  AppContent,
  AppDiv
} from "./Styles";

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
      <AppDiv>
        <AppContent>
          {/* This container holds the joke from the state */}
          <TopContainer>
            {this.state.joke ? this.state.joke.joke : "Loading joke..."}
          </TopContainer>
          {/* This container holds the title and the signature */}
          <TitleContainer>
            <h1>Dad Jokes</h1>
            <p className="sig">
              Web App by{" "}
              <a href="https://jamesonb.com/" target="_blanks">
                Jameson Brown
              </a>
            </p>
            {this.state.copied ? <p className="copied-modal">Copied!</p> : null}
          </TitleContainer>
          {/* This container holds the NEW button */}
          <Button onClick={this.handleJoke}>NEW</Button>
          {/* This container holds the COPY button */}
          <CopyToClipboard
            text={this.state.joke.joke}
            onCopy={this.handleOnCopy}
          >
            <Button>COPY</Button>
          </CopyToClipboard>
        </AppContent>
      </AppDiv>
    );
  }
}

export default App;
