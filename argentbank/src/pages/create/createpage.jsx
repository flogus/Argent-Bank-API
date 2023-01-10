import React from 'react'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import Createform from './createform'
import { Link } from 'react-router-dom'

function Create () {
  return (
    <div className='App'>
      <Banner />
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <i className='fa fa-user-circle sign-in-icon'></i>
          <h1>Create account</h1>
          <Createform />
          <Link to='/'>Cancel</Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Create
