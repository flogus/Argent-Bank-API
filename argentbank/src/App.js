import './App.css';


import Home from './pages/home/home'
import Signin from './pages/signin/signin'
import { Routes, Route } from "react-router-dom"


function App() {
  return (
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="signin" element={ <Signin /> } />
  </Routes>
  );
}

export default App;
