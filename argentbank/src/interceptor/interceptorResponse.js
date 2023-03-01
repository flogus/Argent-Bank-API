import axios from 'axios'

export const InterceptorResponse = axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('Error', error)
    const statusCode = error.response.data.status

    if (statusCode === 401) {
      console.log('Error : go to login')
      localStorage.removeItem('abToken')
      window.location.href = '/signin'
    }
    return error
  }
)
