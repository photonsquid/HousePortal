import React from "react";
import logo from "./photonsquid.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Org-logo" alt="logo" />
        <p>Welcome to HousePortal !</p>
        <a
          className="App-link"
          href="https://github.com/photonsquid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
