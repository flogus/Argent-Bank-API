import axios from 'axios'

export const InterceptorResponse = axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const statusCode = error.response.data.status

    if (statusCode === 401) {
      localStorage.removeItem('abToken')
      window.location.href = '/signin'
    }
    return error
  }
)
