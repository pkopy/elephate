import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Start from './Start';
import Details from './Details';

class App extends Component {
  state = {
    data: [],
    isLoad: true,
    error:"We have error",
    details:''
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

  setDetails = (site) => {
    this.setState({details:site})
  }

  
  
  render() {

    const {isLoad, data, details} = this.state;
    return (
      <div className="App">
      
        <Route exact path="/" render={({history}) => (
          <Start
            isLoad={isLoad}
            data={data}
            getData={this.getData}
            setDetails={this.setDetails}
            
          /> 
        )}/>

        <Route path="/details" render={({history}) =>(
          <Details
            details={details}
            // history={()=>history.push('/')}
          />
        )}/>

      </div>
    );
  }
}

export default App;
