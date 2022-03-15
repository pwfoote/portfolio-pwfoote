
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
      <About></About>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <ContactForm></ContactForm>
      
        
      </main>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
