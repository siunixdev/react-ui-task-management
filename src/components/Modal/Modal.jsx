import React, { useState } from 'react'
import './Modal.sass'
import Button from '../../components/Button/Button'
import {
  XIcon
} from '@heroicons/react/outline'

const Modal = ({ children, title, closeAction }) => {
  return (
    <div>
      <div>
        <div
          onClick={closeAction}
          className='modal-overlay'
        >
        </div>
        <div className='modal no-scrollbar'>
          <div className='modal__body'>
            <div className='flex justify-between items-center mb-4'>
              <span className='font-semibold'>
                {title}
              </span>
              <Button
                type="btn--pill"
                icon={<XIcon />}
                onClick={closeAction}
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal