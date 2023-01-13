import { useEffect } from 'react';
import './App.scss';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Portfolio from './components/portfolio/Portfolio';
import "animate.css/animate.min.css";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Portfolio />
    </div>
  );
}

export default App;
