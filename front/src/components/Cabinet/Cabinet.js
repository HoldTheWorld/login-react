import styles from "./cabinet.module.css"
import Contact from "../Contact/Contact"
import AddContact from "../AddContact/AddContact"
import { useState, useEffect, useLayoutEffect  } from 'react'
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getContacts, addContact } from "../../redux/actions/contact.action"

function Cabinet() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [add, setAdd] = useState(false)
  const [search, setSearch] = useState()
  const [searchedContacts, setSearched] = useState([])  
  const {error: userError, value: user} = useSelector((state) => state.user)
  const { error: contactError, value: contacts } = useSelector((state) => state.contact)

//разкоментить!!!!

  // useEffect(() => {
  //   if (user) {
  //     dispatch(getContacts(user.id))
  //   } else {
  //   navigate('/login')
  //   }
  // }, [])


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
  
  const addContact = () => {
    setAdd(!add)
  }

  const searchContact = (e) => {
    setSearch(e.target.value)
  }

return (
    <>
        <div className={styles.top}>
            <button onClick={addContact}> Добавить контакт </button>
            { add &&  <AddContact setAdd={setAdd} add={add}/> }
        </div>
    <div className={styles.contacts_container}>
        <div className={styles.left}>
        {contacts.length ?  contacts.map((el) =>  <Contact contact={el} key={el.id}/>) : 
            contactError }
        </div>

        <div className={styles.right}>
          <div>
            Поиск по имени или номеру телефона :
            <input onChange={searchContact} placeholder='начните ввод'/>
          </div>

          <div>
            Результаты поиска: 
            {searchedContacts.length ?  searchedContacts.map((el) =>  <Contact contact={el} key={el.id}/>) : 
            <div> ничего не найдено </div>
            }
          </div>
        </div>
    </div>


  

    </>
 )

}

export default Cabinet
