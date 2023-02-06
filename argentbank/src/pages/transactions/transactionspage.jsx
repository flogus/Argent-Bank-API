import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import Account from './account'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Userinfo } from './../../features/user/Userinfo'

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

function Transaction (props) {
  const [token, setToken] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      const token = localStorage.getItem('abToken')
      setToken(token)
      console.log('abToken', token)
      getProfile(token)
    }
  }, [])

  const profileUrl = 'http://localhost:3001/api/v1/user/profile'

  const getProfile = token => {
    axios
      .post(profileUrl, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(function (response) {
        console.log('response', response.data)
        console.log('email', response.data.body.email)
      })
  }

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
                <Userinfo />
                <div>!</div>
              </div>
            </h1>
            <button
              className='edit-button'
              onClick={() => dispatch({ type: 'user/add' })}
            >
              Edit Name test
            </button>
            <Link to='/profile'>Profil</Link>
          </div>
          <h2 className='sr-only'>Accounts</h2>
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
        No token found
        <br />
        <Link to='/signin'>Please, go signin</Link>
      </div>
    )
    // navigate('/signin')
  }
}

export default Transaction
