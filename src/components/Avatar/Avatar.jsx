import React from 'react'
import './Avatar.sass'

const Avatar = ({ img }) => {
  return (
    <img
      src={img}
      className='avatar'
    />
  )
}

export default Avatar