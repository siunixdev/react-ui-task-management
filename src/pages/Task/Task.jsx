import React from 'react'
import Collapse from '../../components/Collapse/Collapse'

function Task() {
  return (
    <div>
      <div className='space-y-8'>
        <Collapse
          text="Waiting"
          show={true}
        >
          fgfg
        </Collapse>
        <Collapse
          text="On Progress"
          show={true}
        >

        </Collapse>
        <Collapse
          text="Complete"
          show={true}
        >

        </Collapse>
      </div>
    </div>
  )
}

export default Task