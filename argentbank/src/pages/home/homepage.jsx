import React from 'react';
import Banner from './../../components/banner';
import Footer from './../../components/footer';
import Hero from './hero';
import Sections from './sections';

function Home() {
    return(
    <div className="App">
      <Banner />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
    )
  }
  
  export default Home;
