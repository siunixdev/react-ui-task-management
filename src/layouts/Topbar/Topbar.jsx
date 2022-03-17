import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import './Topbar.sass'
import { useSelector } from 'react-redux'
import {
  SearchIcon,
  PlusSmIcon,
  BellIcon
} from '@heroicons/react/outline'

function Topbar() {
  const title = useSelector(state => state.appState.title)

  const [showMenuAccount, setShowMenuAccount] = useState(false)

  return (
    <div className='topbar'>
      <span className='topbar__title'>{title}</span>
      <div className='topbar__menu'>
        <div className='relative flex items-center'>
          <div className='absolute ml-3'>
            <SearchIcon className='icon' />
          </div>
          <input
            type="text"
            placeholder='Search'
            className='topbar__search'
          />
        </div>
        <Button
          icon={<PlusSmIcon />}
          type="btn--primary btn--pill"
        />
        <Button
          icon={<BellIcon />}
          type="btn--secondary btn--pill"
        />
        <img
          onClick={() => setShowMenuAccount(!showMenuAccount)}
          className='h-8 w-8 bg-gray-500 rounded-full cursor-pointer'
        />
        {
          showMenuAccount && (
            <div className='flex flex-col bg-white shadow-xl border border-gray-200 absolute top-14 right-4 rounded-md text-xs'>
              <a className='p-2 px-8 text-gray-700 bg-gray-50 hover:bg-primary hover:text-white'>Profile</a>
              <a className='p-2 px-8 text-gray-700 bg-gray-50 hover:bg-primary hover:text-white'>Logout</a>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Topbar