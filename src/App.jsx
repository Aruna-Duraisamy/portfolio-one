import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from './components/menu/Menu';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Work from './components/work/Work';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Work />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
