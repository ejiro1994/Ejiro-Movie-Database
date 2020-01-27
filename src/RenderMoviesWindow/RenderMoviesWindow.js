import React, { Component } from "react";
import Popular from  '../categories/popular/Popular';
import "./RenderMoviesWindow.scss";
// import MovieItem from "../movieItem/MovieItem";

// import Popular from "../categories/Popular";
// import TopRated from "../categories/TopRated";
// import Upcoming from "../categories/Upcoming";

class RenderMoviesWindow extends Component {
    render() {
        return (
            <div className="renderMoviesWindow">
                <Popular />
            </div>
        );
    }
}

export default RenderMoviesWindow;
