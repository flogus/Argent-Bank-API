import React from 'react';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import Form from './signinform'

function Signin() {
    return(
        <div className="App">
            <Banner />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Form />
                </section>
            </main>
            <Footer />
        </div>
    )
  }
  
  export default Signin;
