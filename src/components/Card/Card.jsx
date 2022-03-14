import React from 'react'
import './Card.sass'

function Card({ children }) {
  return (
    <div className='card'>
      <div className='card__body'>
        {children}
      </div>
    </div>
  )
}

export default Card