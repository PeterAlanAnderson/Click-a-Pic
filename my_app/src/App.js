import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
// import Game from "./Game"
import Header from "./components/Header"
// import GameGrid from "./components/GameGrid"
// import Cards from "./components/Cards"

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* <GameGrid/> */}
      </div>
      
    )
  }
}

export default App;
