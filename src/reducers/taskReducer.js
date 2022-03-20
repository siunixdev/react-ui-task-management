import {
  SHOW_DETAIL
} from '../actions/constant'

const INITIAL_STATE = {
  showDetail: false
}

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_DETAIL:
      return {
        ...state,
        showDetail: action.data
      }
    default:
      return state
  }
}

export default taskReducer