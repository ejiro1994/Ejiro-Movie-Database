import React from "react";
import "./MovieItem.scss";

function MovieItem() {
    return (
        // <div className="movieCard">
            <div className="movie-item card">
                <div className="wrapper">
                    <div className="header">
                        <div className="date">
                            <span className="day">12</span>
                            <span className="month">Aug</span>
                            <span className="year">2016</span>
                        </div>
                        <ul className="menu-content">
                            <li>
                                <i href="/" className="fa fa-bookmark-o"></i>
                            </li>
                            <li>
                                <a href="/" className="fa fa-heart-o">
                                    <span>18</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="fa fa-comment-o">
                                    <span>3</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="data">
                        <div className="content">
                            <span className="author">Jane Doe</span>
                            <h1 className="title">
                                <a href="/">
                                    Stranger Things: The sound of the Upside
                                    Down
                                </a>
                            </h1>
                            <p className="text">
                                The antsy bingers of Netflix will eagerly
                                anticipate the digital release of the Survive
                                soundtrack, out today.
                            </p>
                            <a href="/" className="button">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default MovieItem;
