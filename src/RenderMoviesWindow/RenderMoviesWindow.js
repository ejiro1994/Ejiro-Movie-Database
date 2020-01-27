import React, { Component } from "react";

import Navigation from '../navigation/Navigation'
// import NavigationLeft from '../navigation/left/NavigationLeft'
// import NavigationRight from '../navigation/right/NavigationRight'
import "./RenderMoviesWindow.scss";


class RenderMoviesWindow extends Component {
    // constructor(props) {
    //     super(props)
       
        
    // }

componentDidMount() {
    const {movies} = this.props;
    let MovieList, generateList
   
   
    // MovieList = ({ movies }) => {
    //  generateList = () => {
    //     console.log('movies', movies)
    //     return movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
    // }
} 

    // const MovieList = ({ movies }) => {
    //     const generateList = () => {
    //         console.log('movies', movies)
    //         return movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
    //     }
//  console.log(this.props);


    render() {
        return (
            <>
            
            <Navigation click={this.props.click}/>
            <div className="renderMoviesWindow">
                {this.props.children}
            </div>
            </>
        );
    }
}

export default RenderMoviesWindow;
