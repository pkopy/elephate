import React, { Component } from 'react';
import logo from './elephate-ico-gold.svg';
import './App.css';

class App extends Component {
  state = {
    data: {}
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>

      </div>
    );
  }
}

export default App;
