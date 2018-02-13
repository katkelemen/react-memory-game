import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './Board.js';

// <Board colors='8' random='true'>
// disappear slowly
// count score
// beautify
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Ready to test your memory?</h1>
        </header>
        <div className="App-body">
          <Board colors={8} random={true}/>
        </div>
      </div>
    );
  }
}

export default App;
