import React, { Component } from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import Header from './Header'

class Start extends Component {
  state = {
    histData : []
  }

  

  render() {

    const {isLoad, data, getData, setDetails, progress} = this.props;
    let x = Math.floor(progress/6 * 100);
    return(
      <div>
        
        <Header/>

        <div className="button" onClick={getData}>Get data</div>

        <Loader
          isLoad = {isLoad}
          progress = {progress}
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