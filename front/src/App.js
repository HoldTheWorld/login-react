import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import Cabinet from './components/Cabinet/Cabinet';
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router"



function App() {
  // const navigate = useNavigate()
  //   useEffect(() => {
  //     if(!document.cookie.length) {
  //       navigate('/cabinet') 
  //     } else {
  //       navigate('/login')
  //     }
  //   })
  console.log(document.cookie);
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cabinet' element={<Cabinet/>}/>
      </Routes>
    </div>
  );
}

export default App;
