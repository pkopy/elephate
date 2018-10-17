import React, { Component } from 'react';
import Loader from './Loader';
import logo from './elephate-ico-gold.svg';
import { Route } from 'react-router-dom'
import Details from './Details';
import { Link } from 'react-router-dom';

class Start extends Component {
  state = {
    histData : []
  }

  

  render() {

    const {isLoad, data, getData, setDetails} = this.props;
    return(
      <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
          </header>
          <div className="button" onClick={getData}>Get data</div>

          <Loader
            isLoad = {isLoad}
          />
          <div>
            <ol className="images">
              {data.map((site) => 
                <li key={site.name} className="li-start">
                  <div ><Link to="/details" onClick={()=>setDetails(site)}><img className="thumb" src={site.imgSrc}></img></Link>{site.name.toUpperCase()}</div>
                </li>
              )}
            </ol>
            
          </div>
          
        

      </div>
    )
  }
}

export default Start