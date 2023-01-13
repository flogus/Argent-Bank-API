import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Createform () {
  const [lastName, setLastName] = useState('Jobs')
  const [firstName, setFirstName] = useState('Steve')
  const [email, setEmail] = useState('steve@apple.com')
  const [password, setPassword] = useState('0000')
  const [message, setMessage] = useState('Please fill the form')

  const signupUrl = 'http://localhost:3001/api/v1/user/signup'
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    axios
      .post(signupUrl, { lastName, firstName, email, password })
      .then(function (response) {
        console.log('response', response)
        navigate('/signin')
      })
      .catch(function (error) {
        console.log('error', error)
        setMessage('User already exist')
      })
  }

  return (
    <form onSubmit={handleSubmit} method='post'>
      <h3 className='text-sm'>{message}</h3>
      <div className='input-wrapper'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          id='firstName'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          id='lastName'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='input-remember'>
        <input type='checkbox' id='remember-me' />
        <label htmlFor='remember-me'>Remember me</label>
      </div>
      <button className='sign-in-button'>Create account</button>
    </form>
  )
}

export default Createform
