import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './elephate-ico-gold.svg';

class Details extends Component {
  
  
  render () {
    const {details} = this.props
    console.log(details)
    return(
      <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
        </header>
        <h1>{details.name.toUpperCase()}</h1>
        <div>
          <img className="image" src={details.imgSrc} alt={details.name}></img>
          <img className="image" src={details.imgSrcWithoutJS} alt={details.name}></img>
        </div>
        <Link className="close-new-note-button" to="/" >Close</Link>
      </div>

    )
  }
}

export default Details