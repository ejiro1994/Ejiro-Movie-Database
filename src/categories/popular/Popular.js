import React from 'react';
import MovieItem from '../../movieItem/MovieItem'



const Popular = ({ state }) => {

	
	return (
		<>
		{console.log(state)}
		{state.isLoaded ? (
			state.fullListOfMovies.map(movie => {
				return (
					<MovieItem key={movie.id} movie={movie}/>
				)
			})
		) : (
			<p> .... Loading</p>
		)}

		</>
	);
}

export default Popular;
