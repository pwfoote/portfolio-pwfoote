import React from 'react';
import profileImage from './img/cover-image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>preston foote</h2>
      <h3>this is working</h3>
      <h4>hope this is working</h4>
      <img  class="cover-img" src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
