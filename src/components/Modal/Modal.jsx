import React, { useState } from 'react'
import './Modal.sass'
import Button from '../../components/Button/Button'
import {
  XIcon
} from '@heroicons/react/outline'

const Modal = ({ children, isShow = false, title }) => {
  const [show, setShow] = useState(isShow)

  return (
    <div>
      {
        show && (
          <div>
            <div
              onClick={() => setShow(false)}
              className='modal-overlay'
            >
            </div>
            <div className='modal'>
              <div className='modal__body'>
                <div className='flex justify-between items-center mb-4'>
                  <span className='font-semibold'>
                    {title}
                  </span>
                  <Button
                    type="btn--pill"
                    icon={<XIcon />}
                    onClick={() => setShow(false)}
                  />
                </div>
                {children}
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Modal