import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Token from './token'

function Signinform () {
  const [token, setToken] = useState()
  const [email, setEmail] = useState('steve@apple.com')
  const [password, setPassword] = useState('0000')
  const [message, setMessage] = useState('Please fill the form')

  const navigate = useNavigate()

  const loginUrl = 'http://localhost:3001/api/v1/user/login'

  const handleSubmit = async e => {
    e.preventDefault()
    const userData = { email, password }

    await fetch(loginUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('data', data.message)
        setMessage(data.message)
        if (data.message === 'User successfully logged in') {
          console.log('Token', data.body.token)
          localStorage.clear()
          localStorage.setItem('abToken', data.body.token)
          navigate('/transactions')
        }
      })
  }
  if (!token) {
    return (
      <form onSubmit={handleSubmit} method='post'>
        <h3 className='text-sm'>{message}</h3>
        <div className='input-wrapper'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' defaultValue={email} />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' defaultValue={password} />
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
