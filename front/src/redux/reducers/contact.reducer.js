import { DELETE_CONTACT, DELETE_CONTACT_ERROR, SET_CONTACTS, SET_CONTACTS_ERROR, ADD_CONTACT, ADD_CONTACT_ERROR  } from '../types'

export const contactReducer = (state={}, action) => {
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
        error: error
      }
    }
    case DELETE_CONTACT: {
      const contacts = state.value.filter((el) => el.id !== payload)

      return {
        value: contacts
      }
    }



    default: {
      return state
    }
  }
}
