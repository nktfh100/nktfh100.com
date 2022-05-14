import React, { useEffect } from 'react';
import './App.scss';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import "animate.css/animate.min.css";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, []);
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
