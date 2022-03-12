import React from 'react'
import './Button.sass'

const Button = ({ text, icon, type, onClick }) => {
  return (
    <button
      onClick={onClick}
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