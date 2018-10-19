import React, { Component } from "react";

class Loader extends Component {

    test = (e) => {
        console.log(e)
    }
    render () {
        const {isLoad, progress} = this.props
        let x = Math.floor(progress/6 * 100);
        return(
            <div>
                
                
                {isLoad?<div/>:(<div className="progressBar"><div className="progressBg" style={{'width':`${progress*30/6}em`}}></div><div className="progress-text"><b>{x} %</b></div></div>)}
                {/* {isLoad?<div/>:<div className="loader"></div>} */}
            </div>
        )
    }
}

export default Loader