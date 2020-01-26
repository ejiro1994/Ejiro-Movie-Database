import React from "react";
import "./NavigationTop.scss";

function NavigationTop() {
    return (
        <nav className="topNav">
            <ul className="navCategories">
                <li>
                    <i class="fa fa-globe" aria-hidden="true"></i>

                    <a href="/">all</a>
                </li>
                <li>
                    <i class="fa fa-bookmark" aria-hidden="true"></i>

                    <a href="/">popular</a>
                </li>
                <li>
                    <i class="fa fa-star" aria-hidden="true"></i>

                    <a href="/">top&ndash;rated</a>
                </li>
                <li>
                    <i class="fa fa-calendar" aria-hidden="true"></i>

                    <a href="/">upcoming</a>
                </li>
            </ul>
        </nav>
    );
}
export default NavigationTop;
