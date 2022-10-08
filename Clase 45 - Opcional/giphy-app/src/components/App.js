import React, { Component } from 'react';
import Navigation from './Navigation';
import Gif from './Gif';

class App extends Component {
  componentDidMount() {
    console.log('component did mount!');
  };

  componentDidUpdate() {
    console.log('component did update!');
  };

  render() {
    return(
      <div>
        <Navigation />
        <Gif />
      </div>
    );
  };
}

export default App;
