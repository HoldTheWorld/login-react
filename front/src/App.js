import { Routes, Route, useNavigate } from 'react-router'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Cabinet from './components/Cabinet/Cabinet'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.length) {
      navigate('/register')
    } else {
      navigate('/cabinet')
    }
  }, [localStorage.length])

  return (
    <>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cabinet' element={<Cabinet/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
