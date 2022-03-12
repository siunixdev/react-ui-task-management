import React from 'react'
import './Collapse.sass'

const Collapse = ({ text, children }) => {
  return (
    <div className='collapse'>
      <span className='collapse__text'>{text}</span>
      {children}
    </div>
  )
}

export default Collapse