import React, { Component } from "react";

class Loader extends Component {

    test = (e) => {
        console.log(e)
    }
    render () {
        const {isLoad, progress} = this.props
        let x =progress/6 * 100;
        return(
            <div>
                <div><ol></ol></div>
                
                {isLoad?<div/>:<div>{x}<div className="loader"></div></div>}
                {/* {isLoad?<div/>:<div className="loader"></div>} */}
            </div>
        )
    }
}

export default Loader