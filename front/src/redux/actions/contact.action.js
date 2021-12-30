import { DELETE_CONTACT_ERROR, DELETE_CONTACT, SET_CONTACTS, SET_CONTACTS_ERROR, ADD_CONTACT_ERROR, ADD_CONTACT } from '../types'

export const getContacts = (id) => async (dispatch) => {

  try {
    const response = await fetch('http://localhost:3000/contacts', {
     credentials: 'include',
   })
   const allContacts = await response.json()
   const userContacts = allContacts.filter((el) => el.user_id == id)
   
   dispatch({
    type: SET_CONTACTS,
    payload: userContacts
  })
  } catch (err) {
    dispatch({
      type: SET_CONTACTS_ERROR,
      payload: {error: err}
    })
  }
}

export const addContact = ({user_id, name, phone}) => async (dispatch) => {

try {
  const response = await fetch('http://localhost:3000/contacts', {
       method: 'POST', 
       credentials: 'include',
       headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          user_id, name, phone
        })
     })
    if(response.ok) {
      dispatch({
        type: ADD_CONTACT,
        payload: {user_id, name, phone}
      })
    } else {
      dispatch ({
        type: ADD_CONTACT_ERROR,
        payload: {error: 'ошибка добавления контакта'}
      })
    }
} catch(err) {
  dispatch ({
    type: ADD_CONTACT_ERROR,
    payload: {error: err}
  })
}

}


export const deleteContact = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3000/contacts/${id}`, {
         method: 'DELETE', 
         credentials: 'include',
       })
      if(response.ok) {
        dispatch({
          type: DELETE_CONTACT,
          payload: id,
        })
      } else {
        dispatch ({
          type: DELETE_CONTACT_ERROR,
          payload: {error: 'ошибка удаления контакта'}
        })
      }
  } catch(err) {
    dispatch ({
      type: DELETE_CONTACT_ERROR,
      payload: {error: err}
    })
  }
}
