import React from 'react';
import '../assets/css/app.css';
import SideBar from '../components/SideBar.js';
import ContentWrapper from '../components/ContentWrapper.js';

function App() {
  return (
    <div className="App">
      <SideBar />
      <ContentWrapper />
    </div>
  );
}

export default App;
