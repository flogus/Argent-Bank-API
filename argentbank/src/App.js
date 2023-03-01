import './App.css'
import Home from './pages/home/homepage'
import Signin from './pages/signin/signinpage'
import Transactions from './pages/transactions/transactionspage'
import Create from './pages/create/createpage'
import Profile from './pages/profile/profilepage'
import { Routes, Route } from 'react-router-dom'
import { InterceptorResponse } from './interceptor/interceptorResponse'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signin' element={<Signin />} />
      <Route path='transactions' element={<Transactions />} />
      <Route path='create' element={<Create />} />
      <Route path='profile' element={<Profile />} />
    </Routes>
  )
}

export default App
