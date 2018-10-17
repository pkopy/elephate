import React, { Component } from 'react';
import logo from './elephate-ico-gold.svg';

class Header extends Component {

  render() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />   
          <h1 className="header-text">PUPPETEER AND REACT </h1> 
      </header>
    )
  }
}
export default Header