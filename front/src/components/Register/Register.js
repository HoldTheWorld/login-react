import React from 'react'
import styles from './register.module.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useFunctionContext } from '../../context/functionContext'

function Register (){
  const navigate = useNavigate()
  const [userName, setName] = useState('')
  const [useEmail, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setWord } = useFunctionContext()

  useEffect(() => {
    if (localStorage.length) {
    navigate('/cabinet')
    }
  },[])

  const getUser = async (e) => {
   e.preventDefault()
   const response = await fetch('http://localhost:3000/users', {
     method: 'POST', 
     credentials: 'include',
     headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name: userName, 
        email: useEmail,
        password: password
      })
   })
   if (response.ok) {
     setWord('Подтвердите')
     navigate('/login')
    }
  }

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePass = (e) => {
    setPassword(e.target.value);
  }

  return(
    <>
     <div className={styles.register}>
        Если вы уже зарегистрированы, вы можете 
       <Link to='/login'> войти </Link>
      </div>
      <form className={styles.input_container} onSubmit={getUser}>
        <label> Имя   </label>
          <input onChange={handleName}  name='name' id='name' type='text' placeholder='имя'/>
        <label > email  </label>
          <input onChange={handleEmail} name='email' id='email' type='text' placeholder='email'/>
        <label> Пароль  </label>
          <input onChange={handlePass} name='password' id='password' type='password' placeholder='пароль'/>
        <button>Регистрация</button>
      </form>
    </>
  )
}

export default Register
