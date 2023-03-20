import React from 'react'
import Banner from '../../components/banner/banner'
import Footer from '../../components/footer/footer'
import Profileform from './profileform'
import { Userinfo } from '../../components/user/Userinfo'

function Profile () {
  return (
    <div className='App'>
      <Banner />
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <h1>Your profile</h1>
          <Userinfo />
          <Profileform />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Profile
