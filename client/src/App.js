import React from "react";
import logo from "./logo.svg";
import { FileSearch } from "./FileSearch";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <FileSearch />
    </header>
  </div>
);

export default App;