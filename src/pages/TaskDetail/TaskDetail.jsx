import React from 'react'
import './TaskDetail.sass'
import Modal from '../../components/Modal/Modal'
import { useDispatch } from 'react-redux'
import { setShowDetail } from '../../actions/task'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import {
  PlusSmIcon,
} from '@heroicons/react/outline'

const TaskDetail = () => {
  const dispatch = useDispatch()

  const closeDetail = () => {
    dispatch(setShowDetail(false))
  }

  return (
    <Modal
      isShow={true}
      title="Task Detail"
      closeAction={() => closeDetail()}
    >
      <div className='task'>
        <span className='task__title'>Dashboard</span>
        <table className='task__detail'>
          <tr>
            <td className='task__subdetail'>Project</td>
            <td>HRIS Orion Teknologi Celebes</td>
          </tr>
          <tr>
            <td className='task__subdetail'>Assigned By</td>
            <td>
              <div className='flex space-x-2'>
                <Avatar
                  img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                />
                <Avatar
                  img="https://avatars.githubusercontent.com/u/59114266?v=4"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td className='task__subdetail'>Due Date</td>
            <td>04/05/2022</td>
          </tr>
          <tr>
            <td className='task__subdetail'>Project</td>
            <td>Web Design</td>
          </tr>
        </table>
        <div className='task__subtitle'>
          <span className='font-medium'>Description : </span>
          <span className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias excepturi aliquam minima cumque delectus sapiente a iusto, aspernatur nemo fugiat! Tempore, sapiente porro? Eos qui obcaecati fuga debitis inventore.</span>
        </div>
        <div className='task__subtitle'>
          <span className='font-medium'>Subtask</span>
          <div className='subtask'>
            <div className='w-full'>
              <input
                placeholder='Subtask Title'
                type='text'
                className='border text-xs p-2 rounded-md focus:border-gray-500 focus:outline-none w-full'
              />
            </div>
            <div>
              <Button
                icon={<PlusSmIcon />}
                type="btn--primary btn--pill"
              />
            </div>
          </div>
          <div className='space-y-2'>
            <div className='space-x-2 border-b'>
              <span onClick={() => alert("setDone")} className='line-through cursor-pointer'>Design Wirefame for Dashboard</span>
            </div>
            <div className='space-x-2 border-b'>
              <span onClick={() => alert("setDone")} className='line-through cursor-pointer'>Download All component</span>
            </div>
          </div>
        </div>
        <div className='task__subtitle'>
          <span className='font-medium'>Attachment</span>
          <div>
            <div className='w-32'>
              <Card onClick={() => alert("Add teammate Action")}>
                <div className='attachment'>
                  <div className='attachment__button'>
                    <PlusSmIcon className='icon' />
                  </div>
                  <span className='attachment__text'>Add Attachment</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default TaskDetail