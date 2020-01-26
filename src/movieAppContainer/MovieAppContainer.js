import React from 'react'
import './MovieAppContainer.scss'
import NavigationTop from '../navigation/top/NavigationTop'
import NavigationLeft from '../navigation/left/NavigationLeft'
import NavigationRight from '../navigation/right/NavigationRight'
import RenderMoviesWindow from '../RenderMoviesWindow/RenderMoviesWindow'

function MovieAppContainer() {

	return (
		<div className='container'>
			
			<NavigationTop />
			<NavigationLeft />
			<NavigationRight />
			<RenderMoviesWindow />

		</div>
	)
}

export default MovieAppContainer