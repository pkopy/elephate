import React, { Component } from 'react';
import logo from './elephate-ico-gold.svg';
import './App.css';
import Loader from './Loader'

class App extends Component {
  state = {
    data: [],
    isLoad: true
  }

  getData = () => {
    this.setState({data:[]})
    this.setState({isLoad: false})
    fetch('http://localhost:3000/').then(res => res.json())
    .then(dataRes => {
      this.setState({data:dataRes});
      this.setState({isLoad:true})
    })
  }
  
  render() {

    const {isLoad} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <div className="button" onClick={this.getData}>Get data</div>
        <Loader
          isLoad = {isLoad}
        />
      </div>
    );
  }
}

export default App;
