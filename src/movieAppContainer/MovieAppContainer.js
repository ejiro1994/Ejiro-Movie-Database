import React, { Component } from 'react'
import './MovieAppContainer.scss'
import NavigationTop from '../navigation/top/NavigationTop'
import NavigationLeft from '../navigation/left/NavigationLeft'
import NavigationRight from '../navigation/right/NavigationRight'
import RenderMoviesWindow from '../RenderMoviesWindow/RenderMoviesWindow'



 class MovieAppContainer extends Component {

	
	render() {
		return (
			<div className='container'>
				
				<NavigationTop />
				<NavigationLeft />
				<NavigationRight />
				<RenderMoviesWindow />
	
			</div>
		)
	}
}


export default MovieAppContainer