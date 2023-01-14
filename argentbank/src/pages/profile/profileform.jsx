import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Profileform () {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const signupUrl = 'http://localhost:3001/api/v1/user/signup'
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
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
      <button className='sign-in-button'>Update your account</button>
    </form>
  )
}

export default Profileform
