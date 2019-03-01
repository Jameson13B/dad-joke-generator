import styled from "styled-components";
import Toggle from "react-toggle-component";
import "react-toggle-component/styles.css";

export const AppDiv = styled.div`
  text-align: center;
  background-color: ${props => (props.theme === "day" ? "#dfe8fd" : "black")};
`;
export const AppContent = styled.div`
  background-color: ${props => (props.theme === "day" ? "#ffffff" : "black")};
  border: ${props =>
    props.theme === "day" ? "1px solid black" : "1px solid white"};
  color: ${props => (props.theme === "day" ? "black" : "white")};
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
// This container holds the joke from the state
export const TopContainer = styled.div`
  border: ${props =>
    props.theme === "day" ? "1px solid black" : "1px solid white"};
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Menlo";
  font-size: 1.5rem;
  padding: 15px;
  position: relative;
`;
// This container holds the title and the signature
export const TitleContainer = styled.div`
  border: ${props =>
    props.theme === "day" ? "1px solid black" : "1px solid white"};
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    margin-bottom: 10px;
  }
  .copied-modal {
    border: ${props =>
      props.theme === "day" ? "3px solid black" : "3px solid white"};
    padding: 10px;
    align-self: center;
    position: absolute;
    font-size: 2.5rem;
    bottom: 50%;
  }
  @media (max-width: 600px) {
    h1 {
      margin-bottom: 5px;
    }
    .sig {
      margin-top: 5px;
    }
    .copied-modal {
      bottom: 45%;
    }
  }
`;
// This container holds the NEW/COPY buttons
export const Button = styled.div`
  cursor: pointer;
  border: ${props =>
    props.theme === "day" ? "1px solid black" : "1px solid white"};
  width: 50%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  -webkit-transition: margin 0.5s width 0.5s ease;
  transition: margin 0.5s width 0.5s ease;
  @media (min-width: 600px) {
    :hover {
      background: ${props => (props.theme === "day" ? "#f5f5f5" : "#333333")};
      font-weight: bold;
    }
    :active {
      margin: 1%;
      width: 48%;
    }
  }
`;
export const ThemeToggle = styled(Toggle)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
