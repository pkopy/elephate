import React, { Component } from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import Header from './Header'

class Start extends Component {
  state = {
    histData : []
  }

  

  render() {

    const {isLoad, data, getData, setDetails} = this.props;
    return(
      <div>
        
        <Header/>

        <div className="button" onClick={getData}>Get data</div>

        <Loader
          isLoad = {isLoad}
        />

        <div>
          <ol className="images">
            {data.map((site) => 
              <li key={site.name} className="li-start">
                <div ><Link to="/details" onClick={()=>setDetails(site)}><img className="thumb" src={site.imgSrc} alt={site.name}></img></Link>{site.name.toUpperCase()}</div>
              </li>
            )}
          </ol>          
        </div>

      </div>
    )
  }
}

export default Start