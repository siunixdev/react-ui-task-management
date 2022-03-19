import React from 'react'
import './Card.sass'

const Card = ({ children, onClick }) => {
  return (
    <div className={`card ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
      <div className='card__body'>
        {children}
      </div>
    </div>
  )
}

export default Card