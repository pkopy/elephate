import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './elephate-ico-gold.svg';

class Details extends Component {
  
  
  render () {
    const {details} = this.props
    console.log(details.name)
    return(
      <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
        </header>
        {(details.name !== undefined)?(
          <div>

          <h1>{details.name.toUpperCase()}</h1>
          <div>
            <img className="image" src={details.imgSrc} alt={details.name}></img>
            <img className="image" src={details.imgSrcWithoutJS} alt={details.name}></img>
          </div>
            <div className="links">
              
              <table className="tab">
                <tbody>
                  <tr>
                    <th>{details.numb} links with JS</th>
  
                  </tr>
                    {details.href.map((link, index) => 
                  
                      <tr key={index} >
                      <td><a href={link} target="_blank">{link.slice(0, 40)}...</a></td>
                      </tr>
                    )}
  
                </tbody>
  
              </table>
              <table className="tab">
                <tbody>
                  <tr>
                    <th>{details.numbWithoutJS} links without JS</th>
  
                  </tr>
                    {details.hrefWithoutJS.map((link, index) => 
                  
                      <tr key={index} >
                      <td><a href={link} target="_blank">{link.slice(0, 40)}...</a></td>
                      </tr>
                    )}
  
                </tbody>
  
              </table>
              </div>         
          </div>
        ):(<div></div>)
        
        }
             
          
      
        
        <Link  to="/" ><div className="close-button"></div></Link>
      </div>

    )
  }
}

export default Details