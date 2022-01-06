import React from 'react'
import styles from './login.module.css'
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import { loginUser } from '../../redux/actions/user.actions'

function Login(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {error, value: user} = useSelector((state) => state.user)
  const [useEmail, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user) {
      navigate('/cabinet')
    }
  }, [user])


  const logUser = (e) => {
   e.preventDefault()
   dispatch(loginUser({  
    email: useEmail,
    password: password
  }))
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
        Введите свои данные для входа в систему 
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
