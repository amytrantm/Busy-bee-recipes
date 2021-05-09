import { createStore, applyMiddleware, combineReducers } from 'redux'
import axios from 'axios'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import combinedReducer from './combinedReducer'
import auth from './auth'

// `withExtraArgument` gives us access to axios in our async action creators!
// let middleware = [
//    thunkMiddleware.withExtraArgument({ axios }), 
// ]
//! process is not defined
// if (process.browser) {
//    middleware = [...middleware, createLogger({ collapsed: true })]
// }

/** We wrap the entire redux store in a root reducer with a special
  action, RESET_STORE. 
  It calls our application's reducer with state = undefined. 
  This will trigger each of our sub-reducers to reset back to their initial state. 
  This will come in handy when we need to reset our redux store in between tests.
 */
const appReducer = combineReducers({
   //combinedReducer,
   auth
})

const RESET_STORE = 'RESET_STORE'
export const resetStore = () => ({ type: RESET_STORE })

//root Reducer
const rootReducer = (state, action) => {
   if (action.type === RESET_STORE) {
      state = undefined
      return appReducer(state, action)
   }
   return appReducer(state, action)
}
//👇 Redux DevTools installed in browser.
const middleware = composeWithDevTools(
   applyMiddleware(
      thunkMiddleware.withExtraArgument({ axios }),
      createLogger({ collapsed: true })
   )
)

const store = createStore(rootReducer, middleware)

export default store
export * from './auth'



