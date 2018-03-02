import React, { Component } from 'react';
import logo from './logo.svg';
import Intro from './Intro';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Result from './Result';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friendly Fire</h1>
        </header>
          <Intro></Intro>
      </div>
    );
  }
}

export default App;
