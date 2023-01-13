import React from 'react';
import Banner from '../../components/banner';
import Footer from '../../components/footer';

function Profil() {
    return(
        <div className="App">
            <Banner />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Profil</h1>
                </section>
            </main>
            <Footer />
        </div>
    )
  }
  
  export default Profil;
