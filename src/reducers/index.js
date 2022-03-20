import { combineReducers } from 'redux'
import appReducer from './appReducer'
import taskReducer from './taskReducer'

const rootReducer = combineReducers({
  appState: appReducer,
  taskState: taskReducer
})

export default rootReducer