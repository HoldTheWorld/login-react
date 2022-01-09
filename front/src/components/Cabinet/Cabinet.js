import styles from './cabinet.module.css'
import Contact from '../Contact/Contact'
import AddContact from '../AddContact/AddContact'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../redux/actions/contact.action'

function Cabinet() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [search, setSearch] = useState()
  const [add, setAdd] = useState(false)
  const [searchedContacts, setSearched] = useState([])  
  const { error: contactError, value: contacts } = useSelector((state) => state.contact)

  useEffect(() => {
    if (localStorage.length) {
      dispatch(getContacts(Number(localStorage.id)))
    } else {
    navigate('/register')
    }
  }, [])

  useEffect(() => {
    const searched = contacts.filter((el) => {
      if ((el.name.indexOf(search) != -1 || String(el.phone).indexOf(String(search)) != -1) && search.length) {
        return el
      } else {
        return null
      }
    })
     setSearched(searched)
  }, [search])
  
  const searchContact = (e) => {
    setSearch(e.target.value)
  }

return (
  <>
    <div className={styles.top}>
      <div className={styles.add_contact}>
        {!add && <button onClick={()=> setAdd(!add)}> Добавить контакт</button>} 
        {add && <AddContact add={add} setAdd={setAdd}/> } 
      </div>
      <div className={styles.contact_search}>
        <p> Поиск по имени или номеру телефона  </p>
        <input onChange={searchContact} placeholder='начните ввод'/>
      </div>
    </div>
   
    <div className={styles.contacts_container}>
      <div className={styles.left}>
        {contacts.length ?  contacts.map((el) =>  <Contact contact={el} key={el.id}/>) : contactError }
      </div>
      <div className={styles.right}>
          {searchedContacts.length ?  searchedContacts.map((el) =>  <Contact contact={el} key={el.id}/>) : 
          <p> ничего не найдено </p>
          }
      </div>
    </div>
  </>
 )
}

export default Cabinet
