import React, { Component } from 'react';
import logo from './elephate-ico-gold.svg';
import './App.css';

class App extends Component {
  state = {
    data: []
  }

  getData = () => {
    this.setState({data:[]})
    fetch('http://localhost:3000/').then(res => res.json())
    .then(dataRes => this.setState({data:dataRes}))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <div className="button" onClick={this.getData}>Get data</div>

      </div>
    );
  }
}

export default App;
