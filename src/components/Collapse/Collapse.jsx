import React, { useState } from 'react'
import './Collapse.sass'
import Button from '../Button/Button'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'

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
              <ChevronUpIcon className='icon' />
              :
              <ChevronDownIcon className='icon' />
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