import React, { Component } from 'react';

class Gif extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gif: []
        }
    };

    apiCall(url, handler) {
        fetch(url)
            .then(response => response.json())
            .then(data => handler(data))
            .catch(e => console.log(e))
    };

    saveGif = (data) => {
        console.log(data);
        this.setState({
            gif: data.data
        })
    };

    componentDidMount() {
        console.log('component did mount!');
        this.apiCall('https://api.giphy.com/v1/gifs/trending?api_key=4LEB5MjWp8gOZHQ1ZHWxtMFwkyZ2SjBf', this.saveGif)
    };

    componentDidUpdate() {
        console.log('component did update!');
    };

    render() {
        return (
            <div>
                {this.state.gif.map(function (gif, i) {
                    return <div className="container" >
                        <div className="row text-center">
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card h-100">
                                    <img key={i + gif} className="card-img-top" src={gif.images.downsized.url} alt="" />
                                    <div className="card-body">
                                        <h4 key={i + gif} className="card-title">{gif.title}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                )}
            </div>
        );
    };
}

export default Gif;