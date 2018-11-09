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
    details:'',
    progress: 0,
    token: ''
  }
  componentDidMount = () =>{
    let token = Math.random().toString(36).substr(-8)
    this.setState({token})
    console.log(this.state.token)
  }
  setToken = () => {
    
  }
  getData = () => {
    this.setToken()
    if(this.state.isLoad) {
      
      this.setState({data:[]})
      this.setState({isLoad: false})
      this.setState({progress:0})
      fetch('http://localhost:3000/', {
        headers :{token : this.state.token}
      }).then(res => res.json())
      .then(dataRes => {
        this.setState({data:dataRes});
        this.setState({isLoad:true})
        
      }).catch()
      
      let inter = setInterval(() => {
        console.log(this.state.token)
        fetch('http://localhost:3000/count',{
          
          headers :{token: this.state.token}
        }).then(res => res.json())
        .then(
          data => {
            this.setState({progress:data})
            if(data > 5) {
              clearInterval(inter)
            }
          })       
      }, 3000)

    }

      

      

    
  }

  setDetails = (site) => {
    this.setState({details:site})
  }

  
  
  render() {

    const {isLoad, data, details, progress} = this.state;
    return (
      <div className="App">
      
        <Route exact path="/" render={({history}) => (
          <Start
            isLoad={isLoad}
            data={data}
            getData={this.getData}
            setDetails={this.setDetails}
            progress={progress}
            
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
