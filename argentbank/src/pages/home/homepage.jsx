import React from 'react'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import Hero from './hero'
import Sections from './sections'
// import Userinfo from '../../features/user/Userinfo'

function Home () {
  return (
    <div className='App'>
      <Banner />
      {/* <Userinfo /> */}
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  )
}

export default Home
