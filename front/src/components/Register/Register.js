import React from 'react'
import styles from './register.module.css'
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from 'react'

function Register (){
  const navigate = useNavigate()
  const [userName, setName] = useState('')
  const [useEmail, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
