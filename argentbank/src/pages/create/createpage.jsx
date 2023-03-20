import React from 'react'
import Banner from '../../components/banner/banner'
import Footer from '../../components/footer/footer'
import Createform from './createform'
import { Link } from 'react-router-dom'

function Create () {
  return (
    <div className='App'>
      <Banner />
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <h1>Create account</h1>
          <Createform />
          <br />
          <Link to='/'>Cancel</Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Create
