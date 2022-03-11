import React from 'react'
import './Button.sass'

function Button({ text, icon, type }) {
  return (
    <button
      className={`btn ${type}`}
    >
      {
        icon && (
          <div className='btn__icon'>
            {icon}
          </div>
        )
      }
      {
        text && (
          <span className='btn__text'>
            {text}
          </span>
        )
      }
    </button >
  )
}

export default Button