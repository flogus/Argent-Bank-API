import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
import Hero from './components/hero';
import Sections from './components/sections';

function App() {
  return (
    <div className="App">
      <Banner />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
