import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { update } from '../../features/user/userSlice'

function Profileform () {
  const user = useSelector(state => state.user)
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const signupUrl = 'http://localhost:3001/api/v1/user/profile'
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    const userData = { lastName, firstName }
    console.log('Profil put', userData)
    axios
      .put(signupUrl, userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('abToken')}`
        }
      })
      .then(response => {
        const thePayload = {
          firstName: response.data.body.firstName,
          lastName: response.data.body.lastName
        }
        dispatch({
          type: 'user/update',
          payload: thePayload
        })
        navigate('/transactions')
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
          value={user.password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          value={user.email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <button className='sign-in-button'>Update your account</button>
    </form>
  )
}

export default Profileform
