import { combineReducers } from 'redux'
import { contactReducer } from './contact.reducer'

export const rootReducer = combineReducers({
  contact: contactReducer,
})
