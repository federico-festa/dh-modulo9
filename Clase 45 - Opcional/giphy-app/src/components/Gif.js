import React, { Component } from 'react';

class Gif extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gif: "",
            title: ""
        }
    };

    apiCall(url, handler) {
        fetch(url)
            .then(response => response.json())
            .then(data => handler(data))
            .catch(e => console.log(e))
    };

    showGif = (data) => {
        console.log(data);
        this.setState({
            gif: data.data[2].images.downsized.url,
            title: data.data[2].title
        })
    };

    componentDidMount() {
        console.log('component did mount!');
        this.apiCall('https://api.giphy.com/v1/gifs/trending?api_key=4LEB5MjWp8gOZHQ1ZHWxtMFwkyZ2SjBf', this.showGif)
    };

    componentDidUpdate() {
        console.log('component did update!');
    };

    render() {
        return (
            <div className="container" >
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={this.state.gif} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{this.state.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Gif;