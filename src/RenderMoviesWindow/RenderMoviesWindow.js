import React, { Component } from "react";

import NavigationTop from '../navigation/top/NavigationTop'
import NavigationLeft from '../navigation/left/NavigationLeft'
import NavigationRight from '../navigation/right/NavigationRight'
import "./RenderMoviesWindow.scss";


class RenderMoviesWindow extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <>
            <NavigationTop click={this.props.click}/>
            <div className="renderMoviesWindow">
                {this.props.children}
            </div>
            </>
        );
    }
}

export default RenderMoviesWindow;
