import React, { useEffect, useState } from 'react'

function Createform () {
  const [userdata, setUserdata] = useState()
  const [lastName, setLastName] = useState('Smith')
  const [firstName, setFirstName] = useState('John')
  const [email, setEmail] = useState('js@gmail.com')
  const [password, setPassword] = useState('0000')
  const [message, setMessage] = useState('Please fill the form')

  const signupUrl = 'http://localhost:3001/api/v1/user/signup'

  const handleSubmit = async e => {
    e.preventDefault()
    const userData = { lastName, firstName, email, password }

    fetch('http://localhost:3001/api/v1/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    }).then(() => {
      console.log('new data added')
    })
  }

  return (
    <form onSubmit={handleSubmit} method='post'>
      <div>{message}</div>
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
