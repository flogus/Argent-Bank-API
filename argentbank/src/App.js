import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
import Hero from './pages/home/hero';
import Sections from './pages/home/sections';

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
