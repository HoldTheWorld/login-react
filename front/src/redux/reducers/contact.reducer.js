import { EDIT_CONTACT, EDIT_CONTACT_ERROR, DELETE_CONTACT, SET_CONTACTS, SET_CONTACTS_ERROR, ADD_CONTACT, ADD_CONTACT_ERROR  } from '../types'

export const contactReducer = (state = {}, action) => {
  const {type, payload } = action
  switch(type) {
    
    case SET_CONTACTS: {
      return {
        value: payload,
        error: null
      }
    }

    case SET_CONTACTS_ERROR: {
      const { error } = payload
      return {
        value: null,
        error: error
      }
    }

    case ADD_CONTACT: {
      return {
        value: [...state.value, payload]
      }
    }

    case ADD_CONTACT_ERROR: {
      const { error } = payload
      return {
        value: [...state.value],
        error: error
      }
    }
    case DELETE_CONTACT: {
      const contacts = state.value.filter((el) => el.id !== payload)
      return {
        value: contacts
      }
    }

    case EDIT_CONTACT: {
     const { id, name, phone } = payload 
     const contacts = state.value.map((el) => el.id === id ? {user_ud: el.user_id, name: name, phone: phone, id: el.id} : el)
      return {
        value: contacts
      }
    }

    case EDIT_CONTACT_ERROR: {
      const { error } = payload
      return {
        error: error
      }
    }

    default: {
      return state
    }
  }
}
