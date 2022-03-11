import React from 'react'
import Button from '../../components/Button/Button'
import './Topbar.sass'

function Topbar() {
  return (
    <div className='topbar'>
      <span className='topbar__title'>Home</span>
      <div className='topbar__menu'>
        <div className='relative flex items-center'>
          <div className='absolute ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder='Search'
            className='topbar__search'
          />
        </div>
        <Button
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          }
          type="btn--primary btn--pill"
        />
        <Button
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          }
          type="btn--secondary btn--pill"
        />
        <div
          className='h-8 w-8 bg-gray-500 rounded-full'
        >
        </div>
      </div>
    </div>
  )
}

export default Topbar