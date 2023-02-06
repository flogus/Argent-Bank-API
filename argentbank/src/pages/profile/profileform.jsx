import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

function Profileform () {
  const user = useSelector(state => state.user)
  const [lastName, setLastName] = useState(user.lastName)
  const [firstName, setFirstName] = useState(user.firstName)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
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
