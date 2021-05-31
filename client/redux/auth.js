import axios from 'axios'
import history from '../history'

const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH'
const UPDATE_ME = 'UPDATE_ME'
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

/**
 * ACTION CREATORS
 */
const setAuth = auth => ({
   type: SET_AUTH,
   auth
})

export const _updateMe = (me) => ({
   type: UPDATE_ME,
   auth: me,
})

export const _addToFavorites = (me) => ({
   type: ADD_TO_FAVORITES,
   auth: me
})

export const _removeFromFavorites = (me) => ({
   type: REMOVE_FROM_FAVORITES,
   auth : me
})
/**
 * THUNK CREATORS
 */

export const getMe = () => async (dispatch) => {
   const token = window.localStorage.getItem(TOKEN)
   if (token) {
      const res = await axios.get('/auth/getMe', {
         headers: {
            authorization: token
         }
      })
      return dispatch(setAuth(res.data))
   }
}

//import {authenticate} => AuthForm.js
export const authenticate = (email, password, method) => async (dispatch) => {
   try {
      const res = await axios.post(`/auth/${method}`, { email, password })
      window.localStorage.setItem(TOKEN, res.data.token)
      dispatch(getMe())
      history.push('/')
   } catch (authError) {
      return dispatch(setAuth({ error: authError }))
   }
}

export const logout = () => {
   window.localStorage.removeItem(TOKEN)
   history.push('/')
   return {
      type: SET_AUTH,
      auth: {}
   }
}

// export const updateMe = (me) => {
//    return async (dispatch) => {
//       try {
//          const token = window.localStorage.getItem(TOKEN)

//          await axios.put(`/api/users/${me.id}`, me, {
//             headers: {
//                authorization: token
//             }
//          })
//          dispatch(_updateMe(me))
//       } catch (error) {
//          console.log(`Failed to toggle fav`, error)
//       }
//    }
// }

export const addToFavorites = (userId, recipeId) => {
   return async (dispatch) => {
      try {
         const token = window.localStorage.getItem(TOKEN)
         const { data: user } = await axios.put(`/auth/${userId}/add-recipe-to-favorites`, { recipeId }, {
            headers: {
               authorization: token
            }
         });
         return dispatch(_addToFavorites(user))
      } catch (error) {
         console.log('Failed to add to favorites', error);
      }
   }
}


export const removeFromFavorites = (userId, recipeId) => {
   return async (dispatch) => {
      try {
         const token = window.localStorage.getItem(TOKEN)
         const { data: user } = await axios.put(`/auth/${userId}/remove-from-favorites`, { recipeId }, {
            headers: {
               authorization: token
            }
         });
         return dispatch(_removeFromFavorites(user))
      } catch (error) {
         console.log('Failed to remove recipe from favorites', error);
      }
   }
}

/**
 * REDUCER
 */
export default function (state = {}, action) {
   switch (action.type) {
      case SET_AUTH:
         return action.auth
      case UPDATE_ME:
         return action.auth
      case ADD_TO_FAVORITES:
         return action.auth
      case REMOVE_FROM_FAVORITES:
         return action.auth
      default:
         return state
   }
}