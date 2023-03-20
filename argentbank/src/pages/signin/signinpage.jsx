import React from 'react'
import Banner from '../../components/banner/banner'
import Footer from '../../components/footer/footer'
import Form from './signinform'
import { Link } from 'react-router-dom'

function Signin () {
  return (
    <div className='App'>
      <Banner />
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <h1>Sign In</h1>
          <Form />
          <br />
          <Link to='/create'>Create a new account</Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Signin
