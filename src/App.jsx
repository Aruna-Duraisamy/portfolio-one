import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Work from './components/work/Work';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
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
