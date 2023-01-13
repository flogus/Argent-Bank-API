import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    return () => {
      const abToken = localStorage.getItem('abToken')
      console.log('Createform abToken', abToken)
      setToken(abToken)
    }
  }, [])

  if (token) {
    return (
      <div className='App'>
        <Banner />
        <main className='main bg-dark'>
          <div className='header'>
            <h1>
              Welcome back
              <div
                style={{
                  justifyContent: 'center',
                  display: 'flex'
                }}
              >
                <div style={{ paddingRight: '7px' }} contentEditable={true}>
                  {prenom}
                </div>
                <div style={{ paddingLeft: '7px' }} contentEditable={true}>
                  {nom}
                </div>
                <div>!</div>
              </div>
            </h1>
            <button className='edit-button'>Edit Name</button>
          </div>
          <h2 class='sr-only'>Accounts</h2>
          {accounteList.map((element, index) => {
            return (
              <Account
                amount={element.amount}
                title={element.title}
                text={element.text}
                key={element.amount}
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
