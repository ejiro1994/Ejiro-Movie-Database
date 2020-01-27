import React, { Component } from 'react'
import './App'
import All from './categories/all/All';
import Popular from './categories/popular/Popular';
import TopRated from './categories/topRated/TopRated';
import Upcoming from './categories/upcoming/Upcoming';

import RenderMoviesWindow from './RenderMoviesWindow/RenderMoviesWindow'



class App extends Component {

	state = {
		route: "all"
	}

	handleClick = (e) => {
		e.preventDefault();
		const route = e.target.innerText
		this.setState({ route: route.toLowerCase() })
		console.log(route.toLowerCase());

	}

	getRoute = () => {
		switch (this.state.route) {
			case 'all':
				return <RenderMoviesWindow click={this.handleClick} >
					<All />
				</RenderMoviesWindow>
			case 'popular':
				return <RenderMoviesWindow click={this.handleClick} >
					<Popular />
				</RenderMoviesWindow>
			case 'upcoming':
				return <RenderMoviesWindow click={this.handleClick} >
					<Upcoming />
				</RenderMoviesWindow>
			case 'top-rated':
				return <RenderMoviesWindow click={this.handleClick} >
					<TopRated />
				</RenderMoviesWindow>
			default:
				return null
		}
	}


	render() {
		return (
			<div className='container'>
				{this.getRoute()}
			</div>
		)
	}
}


export default App