import React from 'react'
import './Main.sass'
import { Routes, Route } from 'react-router-dom'

function Main() {
  return (
    <div className='main'>
      <div className='main__container'>
        <Routes>
          <Route path='/home' element="Home" />
          <Route path='/task' element="Task" />
          <Route path='/plan' element="Plan" />
          <Route path='/team' element="Team" />
          <Route path='/reporting' element="Reporting" />
        </Routes>
      </div>
    </div>
  )
}

export default Main