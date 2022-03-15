import {
  SET_TOPBAR_TITLE
} from './constant'

export const topbarTitle = (payload) => ({
  type: SET_TOPBAR_TITLE,
  data: payload
})

export const setTitle = (title) => {
  return (dispatch) => {
    dispatch(topbarTitle(title))
  }
}