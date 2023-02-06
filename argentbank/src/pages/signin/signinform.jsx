import axios from 'axios'
//import { InterceptorResponse } from '../../interceptor/interceptorResponse'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//axios.interceptors.response.use(InterceptorResponse)

function Signinform () {
  // let abtoken = localStorage.getItem('abtoken') ? JSON.parse(localStorage.getItem('abtoken')) : null

  const [status, setStatus] = useState()
  const [token, setToken] = useState()
  const [email, setEmail] = useState('steve@apple.com')
  const [password, setPassword] = useState('0000')
  const [message, setMessage] = useState('Please fill the form')

  const navigate = useNavigate()

  const loginUrl = 'http://localhost:3001/api/v1/user/login'

  const handleSubmit = async e => {
    e.preventDefault()
    const userData = { email, password }

    await axios
      .post(loginUrl, JSON.stringify(userData), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log('response', response.data)
        setMessage(response.data.message)
        if (response.data.message === 'User successfully logged in') {
          localStorage.clear()
          localStorage.setItem('abToken', response.data.body.token)
          navigate('/transactions')
        }
      })
  }
  if (!token) {
    return (
      <form onSubmit={handleSubmit} method='post'>
        <h3 className='text-sm'>{message}</h3>
        <h4 className='text-sm'>{status}</h4>
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
