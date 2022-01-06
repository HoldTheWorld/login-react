import { useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addContact } from '../../redux/actions/contact.action'
import styles from './add.module.css'

function AddContact({add, setAdd}) {
  const dispatch = useDispatch()
  const {error: userError, value: user} = useSelector((state) => state.user)

  const [name, setName ] = useState('')
  const [phone, setPhone ] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleContact = (e) => {
    e.preventDefault()
    dispatch(addContact({
      user_id: user.id,
      name: name,
      phone: phone
    }))
    setAdd(!add)
    setName('')
    setPhone('')
  }

return (
  <>
    <form className={styles.add_form} onSubmit={handleContact}>
      <div>
        <input onChange={handleName} placeholder='имя' name='name' id='name' type='text'/>
        <input onChange={handlePhone} placeholder='телефон' name='phone' id='phone' type='text'/>  
      </div>
      <button> Сохранить </button>
    </form>
  </>
 )
}

export default AddContact
