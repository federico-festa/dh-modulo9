import React, { Component } from 'react';
import Genre from './Genre';

class GenresInDb extends Component {
    constructor() {
        super();
        this.state = {
            genresList: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/genres')
            .then(res => res.json())
            .then(data => this.setState({ genresList: data.data }))
            .catch(e => console.log(e))
    }

    mouse() {
        const cardBody = document.querySelector('.card2');
        cardBody.classList.toggle('bg-secondary');
    };

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onMouseOver={this.mouse} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                        </div>
                        <div className="card-body card2">
                            <div className="row">
                                {
                                    this.state.genresList.map((genre, index) => {
                                        return <Genre  {...genre} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>  
                </div>
            </React.Fragment>
        )
    }
}

export default GenresInDb;