import React from 'react'
import './Main.sass'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import People from '../../pages/People/People'

function Main() {
  return (
    <div className='main'>
      <div className='main__container'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/task' element="Task" />
          <Route path='/plan' element="Plan" />
          <Route path='/people' element={<People />} />
          <Route path='/reporting' element="Reporting" />
        </Routes>
      </div>
    </div>
  )
}

export default Main