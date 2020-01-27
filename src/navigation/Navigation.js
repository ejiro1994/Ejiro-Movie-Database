import React from "react";
import "./Navigation.scss";

function Navigation({ click }) {


    return (
        <>
        <nav className="topNav">
            <ul className="navCategories">

                <li>
                    <i className="fa fa-globe" aria-hidden="true" />
                    <a onClick={click} href="/">
                        all
                    </a>
                </li>
                <li>
                    <i className="fa fa-bookmark" aria-hidden="true" />
                    <a onClick={click} href="/">
                        popular
                    </a>
                </li>
                <li>
                    <i className="fa fa-star" aria-hidden="true" />
                    <a onClick={click} href="/">
                        top-rated
                    </a>
                </li>
                <li>
                    <i className="fa fa-calendar" aria-hidden="true" />
                    <a onClick={click} href="/">
                        upcoming
                    </a>
                </li>

            </ul>
        </nav>
        <div className='navLeft'>
			
            </div>
        <div className='navRight'>
			
            </div>

        </>

    );
}
export default Navigation;
