import React from 'react'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import Profileform from './profileform'

function Profile () {
  return (
    <div className='App'>
      <Banner />
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <h1>Your profile</h1>
          <Profileform />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Profile
