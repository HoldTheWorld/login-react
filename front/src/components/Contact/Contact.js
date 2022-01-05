import styles from './contact.module.css'
import { useState, useEffect  } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteContact, editContact } from '../../redux/actions/contact.action'

function Contact({contact}) {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false)
  const [name, setName ] = useState('')
  const [phone, setPhone ] = useState('')

  useEffect(() => {
    setName(contact.name)
    setPhone(contact.phone)
  },[])


  function handleDelete(id) {
    dispatch(deleteContact(id))
  }

  function handleInputActive() {
    setIsActive(!isActive)
  }
  function handleEdit(id) {
    setIsActive(!isActive)
    dispatch(editContact(id, {name: name, phone: phone}))
  }


return (
  <div className={styles.contact_container}>
    <div>
      <div> Name </div>
        <input onChange={(e)=> {setName(e.target.value)}} name='name' id='name' disabled={!isActive} value={name}/>
      <div> Phone </div>
        <input  onChange={(e)=> {setPhone(e.target.value)}} name='phone' id='phone' disabled={!isActive} value={phone}/>
    </div>
    <div>
      <button onClick={() => handleDelete(contact.id)}>Delete </button>
      {!isActive && <button onClick={() => handleInputActive()}>Edit </button>}
      {isActive && <button onClick={() => handleEdit(contact.id)}>Save </button>} 
    </div>
  </div>
)

}

export default Contact
