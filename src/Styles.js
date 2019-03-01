import styled from "styled-components";

export const AppDiv = styled.div`
  text-align: center;
  background-color: #dfe8fd;
`;
export const AppContent = styled.div`
  background-color: #ffffff;
  border: 1px solid black;
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
// This container holds the joke from the state
export const TopContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Menlo";
  font-size: 1.5rem;
  padding: 15px;
`;
// This container holds the title and the signature
export const TitleContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    margin-bottom: 10px;
  }
  .copied-modal {
    border: 3px solid black;
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
  border: 1px solid black;
  width: 50%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  -webkit-transition: margin 0.5s width 0.5s ease;
  transition: margin 0.5s width 0.5s ease;
  :hover {
    background: #f5f5f5;
    font-weight: bold;
  }
  :active {
    margin: 1%;
    width: 48%;
  }
`;
