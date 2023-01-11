import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Token from './token'

function Signinform () {
  const [token, setToken] = useState()
  const [message, setMessage] = useState()
  const navigate = useNavigate()

  const loginUrl = 'http://localhost:3001/api/v1/user/login'
  // const handleSubmit = () => {
  //   console.log('submit')
  // }
  const handleSubmit = async e => {
    e.preventDefault()
    fetch(loginUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'tony@stark.com',
        password: '$2b$12$cPbZCPXvNdhdeC8a2fmLhOkMsKKo8eIezC09kgmB3OoP4V.Q3xk.6'
      })
    }).then(response => response.json())
  }
  if (!token) {
    return (
      <form onSubmit={handleSubmit} method='get'>
        <h3>{message}</h3>
        <div className='input-wrapper'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        <button className='sign-in-button'>Sign In</button>
      </form>
    )
  } else {
    navigate('/transactions')
  }
}

export default Signinform
