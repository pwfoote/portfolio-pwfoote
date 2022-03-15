import React from 'react';
import profileImage from './img/cover-image.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Projects';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
      <About></About>
      <Portfolio></Portfolio>
        
      </main>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
