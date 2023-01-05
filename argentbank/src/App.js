import './App.css';


import Home from './pages/home/homepage'
import Signin from './pages/signin/signinpage'
import Transactions from './pages/transactions/transactionspage'
import Create from './pages/create/createpage'
import Profil from './pages/profil/profilpage'
import { Routes, Route } from "react-router-dom"


function App() {
  return (
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="signin" element={ <Signin /> } />
    <Route path="transactions" element={ <Transactions /> } />
    <Route path="create" element={ <Create /> } />
    <Route path="profil" element={ <Profil /> } />
  </Routes>
  );
}

export default App;
