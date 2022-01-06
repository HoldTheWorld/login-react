import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../../redux/actions/user.actions'
import { useState } from 'react'


function Header() {
  const navigate = useNavigate()

  const {error, value: user} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const logOut = () => {
    document.cookie =  `user=${user.name}; max-age=0`
    dispatch(userLogout())
    navigate('/login')
  }

  return (
    <>
    <header className={styles.header}>  
       
          { user ? 
           <>
            <Link className={styles.head_links} to='/cabinet'> Личный кабинет</Link>
            <button type='button' onClick={logOut}>  Выйти</button>
          </>
            : 
          <>
            <Link className={styles.head_links} to='/login' >  Войти</Link>
            <Link className={styles.head_links} to='/register' > Регистрация</Link>
          </>
        }

    </header>
    </>
  
  )
}

export default Header
