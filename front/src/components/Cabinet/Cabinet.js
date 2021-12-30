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
  const [name, setName ] = useState('')
  const [phone, setPhone ] = useState('')
  
  const {error: userError, value: user} = useSelector((state) => state.user)
  const { error: contactError, value: contacts } = useSelector((state) => state.contact)

  useEffect(() => {
    if (user) {
      dispatch(getContacts(user.id))
    } else {
    navigate('/login')
    }
  }, [])
  
  const addContact = () => {
    setAdd(!add)
  }


return (
  <>
    <button onClick={addContact}> ADD CONTACT </button>
      { add && 
        <AddContact/>
      }

   {contacts.length ?  contacts.map((el) =>  <Contact contact={el} key={el.id}/>) : 
   contactError }

  </>
)

}

export default Cabinet
