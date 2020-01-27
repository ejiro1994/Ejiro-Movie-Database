import React from "react";
import "./MovieItem.scss";

function MovieItem() {
    return (
        // <div className="movieCard">
        <div className="movie-item card">
            <div className="wrapper">
                <div className="header">
                    <div className="date">
                        <span className="day">Date</span>
                        <span className="month">Of</span>
                        <span className="year">Release</span>
                    </div>
                    <ul className="menu-content">
                        <li>
                            <i href="/" className="fa fa-bookmark-o"></i>
                        </li>
                    </ul>
                </div>
                <div className="data">
                    <div className="content">
                        <span className="author">category</span>
                        <h1 className="title">
                            <a href="/">Title of movie</a>
                        </h1>
                        <p className="text">
                            description do excepteur amet excepteur incididunt
                            do exercitation tempor consequat mollit officia ad
                            voluptate. Magna veniam sunt sunt enim enim ex elit
                            eiusmod. Esse
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
