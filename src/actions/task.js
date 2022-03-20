import {
  SHOW_DETAIL
} from './constant'

export const showDetail = (payload) => ({
  type: SHOW_DETAIL,
  data: payload
})

export const setShowDetail = (isShow) => {
  return (dispatch) => {
    dispatch(showDetail(isShow))
  }
}