import React, { useState } from 'react'
import './Task.sass'
import {
  CheckCircleIcon,
  DotsCircleHorizontalIcon,
  ExclamationCircleIcon
} from '@heroicons/react/solid'

const Task = () => {
  const [showDetail, setShowDetail] = useState(true)
  return (
    <div>
      <div className='flex items-center justify-between mb-8'>
        <span className='title'>Task</span>
        <div>
          <div className='text-gray-600'>
            <span>Show : </span>
            <select className='p-2 rounded-md'>
              <option>All</option>
              <option>HRIS Orion Teknologi Celebes</option>
              <option>Digital Anak Indonesia</option>
            </select>
          </div>
        </div>
      </div>
      <div className='space-y-4'>
        <div className='space-y-8'>
          <div className='p-4 rounded-md min-h-full bg-white border mt-4 space-y-2'>
            <span>Waiting</span>
            <table className='min-w-full'>
              <thead>
                <tr className='text-left border-b'>
                  <th className='p-2 w-5/12'>Task</th>
                  <th className='p-2 w-3/12'>Project</th>
                  <th className='p-2 w-2/12'>Type</th>
                  <th className='p-2 w-2/12'>Due Date</th>
                </tr>
              </thead>
              <tbody className='text-gray-500'>
                <tr className='text-left border-b'>
                  <td className='p-2'>
                    <div className='flex items-center space-x-2 cursor-pointer font-medium text-warning hover:underline'>
                      <ExclamationCircleIcon className='icon' />
                      <span onClick={() => setShowDetail(true)}>
                        Dashboard
                      </span>
                    </div>
                  </td>
                  <td className='p-2'>HRIS Orion Teknologi Celebes</td>
                  <td className='p-2'>Web Design</td>
                  <td className='p-2'>04/05/2022</td>
                </tr>
                <tr className='text-left border-b'>
                  <td className='p-2'>
                    <div className='flex items-center space-x-2 cursor-pointer font-medium text-warning hover:underline'>
                      <ExclamationCircleIcon className='icon' />
                      <span onClick={() => alert("Employee List Clicked")}>
                        Employee List
                      </span>
                    </div>
                  </td>
                  <td className='p-2'>HRIS Orion Teknologi Celebes</td>
                  <td className='p-2'>Web Design</td>
                  <td className='p-2'>04/05/2022</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='p-4 rounded-md min-h-full bg-white border mt-4 space-y-2'>
            <span>On Progress</span>
            <table className='min-w-full'>
              <thead>
                <tr className='text-left border-b'>
                  <th className='p-2 w-5/12'>Task</th>
                  <th className='p-2 w-3/12'>Project</th>
                  <th className='p-2 w-2/12'>Type</th>
                  <th className='p-2 w-2/12'>Due Date</th>
                </tr>
              </thead>
              <tbody className='text-gray-500'>
                <tr className='text-left border-b'>
                  <td className='p-2'>
                    <div className='flex items-center space-x-2 cursor-pointer font-medium text-primary hover:underline'>
                      <DotsCircleHorizontalIcon className='icon' />
                      <span onClick={() => alert("Employee List Clicked")}>
                        Structure and codebase with React
                      </span>
                    </div>
                  </td>
                  <td className='p-2'>HRIS Orion Teknologi Celebes</td>
                  <td className='p-2'>System Design</td>
                  <td className='p-2'>04/05/2022</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='p-4 rounded-md min-h-full bg-white border mt-4 space-y-2'>
            <span>Complete</span>
            <table className='min-w-full'>
              <thead>
                <tr className='text-left border-b'>
                  <th className='p-2 w-5/12'>Task</th>
                  <th className='p-2 w-3/12'>Project</th>
                  <th className='p-2 w-2/12'>Type</th>
                  <th className='p-2 w-2/12'>Due Date</th>
                </tr>
              </thead>
              <tbody className='text-gray-500'>
                <tr className='text-left border-b'>
                  <td className='p-2'>
                    <div className='flex items-center space-x-2 cursor-pointer font-medium text-success hover:underline'>
                      <CheckCircleIcon className='icon' />
                      <span onClick={() => alert("Employee List Clicked")}>
                        Design System and Business Flow
                      </span>
                    </div>
                  </td>
                  <td className='p-2'>HRIS Orion Teknologi Celebes</td>
                  <td className='p-2'>System Design</td>
                  <td className='p-2'>04/05/2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task