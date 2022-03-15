import {
  SET_TOPBAR_TITLE
} from "../actions/constant";

const INITIAL_STATE = {
  title: ""
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TOPBAR_TITLE:
      return {
        ...state,
        title: action.data
      }
    default:
      return state
  }
}

export default appReducer