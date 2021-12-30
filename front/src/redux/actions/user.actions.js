import { SET_USER, SET_USER_ERROR, USER_LOGOUT } from '../types'


export const loginUser = (user) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/users', {
     credentials: 'include',
   })
   const allusers = await response.json()
   const loggedUser = allusers.filter((el) => el.email == user.email)
   if(!loggedUser.length) {
     dispatch({
       type: SET_USER_ERROR,
       payload: {error: 'пользователь не найден'}
     })
   } else if (loggedUser[0].password != user.password) {
    dispatch({
      type: SET_USER_ERROR,
      payload: {error: 'неверный пароль'}
    })
   } else {
    dispatch({
      type: SET_USER,
      payload: loggedUser[0]
    })
   }
  } catch (err) {
    dispatch({
      type: SET_USER_ERROR,
      payload: {error: err}
    })
  }
}

export const userLogout = () => ({
  type: USER_LOGOUT
})
