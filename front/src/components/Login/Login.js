import React from 'react'
import styles from './login.module.css'
import { useNavigate } from 'react-router'
import {useEffect, useState} from 'react'
import { useFunctionContext } from '../../context/functionContext'

function Login(){
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [userEmail, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setWord, word } = useFunctionContext()

  useEffect(() => {
    if (localStorage.length) {
      navigate('/cabinet')
    } 
  }, [])

  const logUser = async (e) => {
   e.preventDefault()
   try {
        const response = await fetch('http://localhost:3000/users', {
        credentials: 'include',
      })
      const allusers = await response.json()
      const loggedUser = allusers.filter((el) => el.email == userEmail)
      if(!loggedUser.length) {
        setError('пользователь не найден')
      } else if (loggedUser[0].password != password) {
        setError('неверный пароль')
      } else {
        localStorage.setItem('id', loggedUser[0].id)
        localStorage.setItem('name', loggedUser[0].name)
        localStorage.setItem('email', loggedUser[0].email)
        setWord('Введите')
        navigate('/cabinet')
      }
    } catch (err) {
      setError('ошибка сервера')
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePass = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className={styles.login}>
       {word} свои данные для входа в систему 
      </div>
      <form className={styles.input_container} onSubmit={logUser}>      
        <label > email  </label>
          <input onChange={handleEmail} name='email' id='email' type='text' placeholder='email'/>
        <label> Пароль  </label>
          <input onChange={handlePass} name='password' id='password' type='password' placeholder='пароль'/>
          {error}
        <button>Вход</button>
      </form>
    </>
  )
}

export default Login
