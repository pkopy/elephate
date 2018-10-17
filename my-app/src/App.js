import React, { Component } from 'react';
import logo from './elephate-ico-gold.svg';
import './App.css';
import Loader from './Loader'

class App extends Component {
  state = {
    data: [],
    isLoad: true,
    error:"We have error"
  }

  getData = () => {
    this.setState({data:[]})
    this.setState({isLoad: false})
    fetch('http://localhost:3000/').then(res => res.json())
    .then(dataRes => {
      this.setState({data:dataRes});
      this.setState({isLoad:true})
    }).catch()
  }
  
  render() {

    const {isLoad, data} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <div className="button" onClick={this.getData}>Get data</div>

        <Loader
          isLoad = {isLoad}
        />
        <div>
          <ol className="images">
            {data.map((site) => 
              <li key={site.name}>
                <div className="image"><img className="thumb" src={site.imgSrc}></img>{site.name.toUpperCase()}</div>
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
