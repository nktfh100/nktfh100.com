import React from 'react';
import './App.scss';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
