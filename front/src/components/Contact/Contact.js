import styles from './contact.module.css'
import { useState, useEffect  } from 'react'
import { useDispatch } from 'react-redux'
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
    dispatch(editContact(Number(id), {name: name, phone: phone}))
  }

return (
  <div className={styles.contact_container}>
    <div>
      <div> Имя </div>
        <input onChange={(e)=> {setName(e.target.value)}} name='name' id='name' disabled={!isActive} value={name} required='required'/>
      <div> Телефон </div>
        <input  onChange={(e)=> {setPhone(e.target.value)}} name='phone' id='phone' disabled={!isActive} value={phone} required='required'/>
    </div>
    <div>
      <button onClick={() => handleDelete(contact.id)}>Удалить </button>
      {!isActive && <button onClick={() => handleInputActive()}>Изменить </button>}
      {isActive && <button onClick={() => handleEdit(contact.id)}>Сохранить </button>} 
    </div>
  </div>
 )
}

export default Contact
