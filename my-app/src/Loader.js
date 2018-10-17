import React, { Component } from "react";

class Loader extends Component {
    render () {
        const {isLoad} = this.props
        return(
            <div>
                {isLoad?<div/>:<div className="loader"></div>}
                {/* {isLoad?<div/>:<div className="loader"></div>} */}
            </div>
        )
    }
}

export default Loader