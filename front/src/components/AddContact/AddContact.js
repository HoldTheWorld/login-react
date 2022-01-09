import { useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addContact } from '../../redux/actions/contact.action'

import styles from './add.module.css'

function AddContact({add, setAdd}) {
  const dispatch = useDispatch()
  const [name, setName ] = useState('')
  const [phone, setPhone ] = useState('')
  const { value: contacts } = useSelector((state) => state.contact)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleContact = (e) => {
    e.preventDefault()
    dispatch(addContact({
      user_id: Number(localStorage.id),
      name: name,
      phone: phone
    }))

  }

return (
  <>
    <form className={styles.add_form} onSubmit={handleContact}>
      <div>
        <input onChange={handleName} placeholder='имя' name='name' id='name' type='text' required='required'/>
        <input onChange={handlePhone} placeholder='телефон' name='phone' id='phone' type='text' required='required'/>  
      </div>
      <div>
          <button> Сохранить </button>
          <button type='button' onClick={() => setAdd(!add)}> Отмена </button>
      </div>
    </form>
  </>
 )
}

export default AddContact
