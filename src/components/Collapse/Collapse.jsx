import React, { useState } from 'react'
import './Collapse.sass'
import Button from '../Button/Button'

const Collapse = ({ text, children, show = false }) => {
  const [recentCollapse, setRecentCollapse] = useState(show)
  return (
    <div className='collapse' >
      <div className='collapse__header'>
        <span className='collapse__header-text'>{text}</span>
        <Button
          onClick={() => setRecentCollapse(!recentCollapse)}
          icon={
            recentCollapse ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
          }
          type="btn--secondary btn--pill btn--xs"
        />
      </div>
      <hr />
      <div className='collapse__body'>
        {
          recentCollapse && (
            <div className='collapse__body-content'>
              {children}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Collapse