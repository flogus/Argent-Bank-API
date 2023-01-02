import './App.css';


import Home from './pages/home/homepage'
import Signin from './pages/signin/signinpage'
import Transactions from './pages/transactions/transactionspage'
import { Routes, Route } from "react-router-dom"


function App() {
  return (
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="signin" element={ <Signin /> } />
    <Route path="transactions" element={ <Transactions /> } />
  </Routes>
  );
}

export default App;
