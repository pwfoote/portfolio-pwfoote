import React from 'react';
import profileImage from './img/cover-image.jpg';
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>

      </main>
      <img  class="cover-img" src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
