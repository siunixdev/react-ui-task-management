import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import ThunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(logger, ThunkMiddleware)
)

export default store