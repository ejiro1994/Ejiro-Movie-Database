import React, { Component } from 'react'
import './App'
import axios from 'axios'


import All from './categories/all/All';
import Popular from './categories/popular/Popular';
import TopRated from './categories/topRated/TopRated';
import Upcoming from './categories/upcoming/Upcoming';

import RenderMoviesWindow from './RenderMoviesWindow/RenderMoviesWindow'



class App extends Component {

	state = {
		route: "all",
		loading: false,
		movies: [],
		fullListOfMovies: [],
		isLoaded: false

	}

	handleClick = (e) => {
		e.preventDefault();
		const route = e.target.innerText
		this.setState({ route: route.toLowerCase() })
		console.log(route.toLowerCase());
	}

	// arr = [1, 2, 3, 4, 5, 6, 7]

	fetchMovies = async () => {
		const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=fa141d49d3a1e439372e15d61f4d4607&page=1`)
		return response.data.results
	}

	fetchData = async () => {
		try {
			this.setState({ loading: true })
			const movies = await this.fetchMovies()
			// console.log(movies)
			this.setState({
				loading: false,
				fullListOfMovies: movies,
				isLoaded: true
				
			})
			// console.log(this.state.fullListOfMovies)
		} catch (e) {
			console.log(e.response.status)
		}
	}

	componentDidMount() {
		this.fetchData()
		// console.log('hello')
	}


	getRoute = () => {
		switch (this.state.route) {
			case 'all':
				return <RenderMoviesWindow click={this.handleClick} movies={this.state.fullListOfMovies}>
					<All state={this.state} />
				</RenderMoviesWindow>
			case 'popular':
				return <RenderMoviesWindow click={this.handleClick} >
					<Popular state={this.state}/>
				</RenderMoviesWindow>
			case 'upcoming':
				return <RenderMoviesWindow click={this.handleClick} >
					<Upcoming state={this.state}/>
				</RenderMoviesWindow>
			case 'top-rated':
				return <RenderMoviesWindow click={this.handleClick} >
					<TopRated state={this.state}/>
				</RenderMoviesWindow>
			default:
				return null
		}
	}


	render() {
		return (
			<div className='container'>
				{this.getRoute()}
				{	console.log(new Date('2019-09-17'))} 
			</div>


		)
	}
}


export default App