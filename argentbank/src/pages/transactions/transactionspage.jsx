import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import Account from './account'

const accounteList = [
  {
    title: 'Checking (x8349)',
    text: 'Available Balance',
    amount: 2082.79
  },
  {
    title: 'Savings (x6712)',
    text: 'Available Balance',
    amount: 10928.42
  },
  {
    title: 'Credit Card (x8349)',
    text: 'Current Balance',
    amount: 184.3
  }
]
const prenom = 'john'
const nom = 'smith'
function Transaction (props) {
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  if (token) {
    return (
      <div className='App'>
        <Banner />
        <main className='main bg-dark'>
          <div class='header'>
            <h1>
              Welcome back
              <br />
              {prenom} {nom}!
            </h1>
            <button class='edit-button'>Edit Name</button>
          </div>
          <h2 class='sr-only'>Accounts</h2>
          {accounteList.map((element, index) => {
            return (
              <Account
                amount={element.amount}
                title={element.title}
                text={element.text}
              />
            )
          })}
        </main>
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        No token
        <br />
        Redirect to signin
      </div>
    )
    // navigate('/signin')
  }
}

export default Transaction
