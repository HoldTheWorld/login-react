import {  SET_USER, SET_USER_ERROR, USER_LOGOUT } from '../types'


export const userReducer = (state={} , action) => {
  const { type, payload } = action
  switch(type) {
    case SET_USER: {      
      return {
        value: payload,
        error: null
      }
    }

    case SET_USER_ERROR: {
      const { error } = payload 
      return {
        value: null,
        error: error
      }
    }


    case USER_LOGOUT: {
      return {
        value: null,
        error: null
      }
    }

    default: {
      return state
    }

  }
}
