import styles from './contact.module.css'
import { useState, useEffect  } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from '../../redux/actions/contact.action'

function Contact({contact}) {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(true)

  function handleDelete(id) {
    dispatch(deleteContact(id))
  }

return (
  <div className={styles.contact_container}>
    <div>
      <div> Name </div>
        <input disabled={isActive} value={contact.name}/>
      <div> Phone </div>
        <input disabled={isActive} value={contact.phone}/>
    </div>
    <div>
      <button onClick={() => handleDelete(contact.id)}>Delete </button>
      <button>Edit </button>
    </div>
  </div>
)

}

export default Contact
