import React from 'react'
import './Avatar.sass'

function Avatar({ img }) {
  return (
    <img
      src={img}
      className='avatar'
    />
  )
}

export default Avatar