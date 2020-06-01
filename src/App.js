import React, { Component } from "react";
import "./App.css";
import FilterName from "./components/name-filter";
import Modal2 from "./components/modal2";
import MoviesContainer from "./components/movie-container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterName />
        <Modal2 name="Add movie" />
        <MoviesContainer />
      </div>
    );
  }
}

export default App;
