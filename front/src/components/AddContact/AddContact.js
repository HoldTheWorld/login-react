import { useState, useEffect  } from 'react'
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import {  addContact } from '../../redux/actions/contact.action'


function AddContact({setAdd, add}) {

  const dispatch = useDispatch()

  const {error: userError, value: user} = useSelector((state) => state.user)

  // const [add, setAdd] = useState(true)
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
    setAdd(!add)
    dispatch(addContact({
      user_id: user.id,
      name: name,
      phone: phone
    }))
  }

return (
  <>
      {add && 
          <div >
            <form onSubmit={handleContact}>
              <label> Имя </label>
                <input onChange={handleName} name='name' id='name' type='text'/>
              <label> Телефон </label>
                <input onChange={handlePhone} name='phone' id='phone' type='text'/>
              <button> Сохранить </button>
            </form>
          </div>
      }
  </>
)

}

export default AddContact
