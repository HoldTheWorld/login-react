import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

function Header() {
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <>
      <header className={styles.header}>  
        { localStorage.length ? 
        <>
 
          <Link className={styles.head_links} to='/cabinet'> Личный кабинет</Link>
          <button type='button' onClick={logOut}>  Выйти</button>
          <div>
            Вы вошли как {localStorage.name}
          </div>
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
