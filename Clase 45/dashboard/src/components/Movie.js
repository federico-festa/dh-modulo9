import React, { Component } from 'react';
import MovieList from './MovieList';

class Movie extends Component {
	constructor() {
		super();
		this.state = {
			moviesList: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/movies')
			.then(res => res.json())
			.then(data => this.setState({ moviesList: data.data }))
			.catch(e => console.log(e))
	}

	render() {
		return (
			<React.Fragment>
				<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</thead>
								<tbody>
									{this.state.moviesList.map((movie, index) => {
										return <MovieList {...movie} key={index} />
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Movie;