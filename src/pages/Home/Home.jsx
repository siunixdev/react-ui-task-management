import React, { useState } from 'react'
import './Home.sass'
import Collapse from '../../components/Collapse/Collapse'
import Card from '../../components/Card/Card'
import Avatar from '../../components/Avatar/Avatar'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

Chart.register(ArcElement, Tooltip, Legend)

const Home = () => {
  var recentProject = [
    {
      id: 1,
      name: "App Development for Internal",
      type: "Development",
      waitingTask: 4,
      progressTask: 2,
      completeTask: 30,
      users: [
        {
          id: 1,
          name: "Abdillah Firdaus",
          image: "https://avatars.githubusercontent.com/u/59114266?v=4"
        },
      ]
    },
    {
      id: 2,
      name: "UI Design for Client X",
      type: "Design",
      waitingTask: 2,
      progressTask: 4,
      completeTask: 20,
      users: [
        {
          id: 1,
          name: "Alexander Joe",
          image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        {
          id: 1,
          name: "Abdillah Firdaus",
          image: "https://avatars.githubusercontent.com/u/59114266?v=4"
        }
      ]
    },
    {
      id: 3,
      name: "Marketing and Sales",
      type: "Marketing",
      waitingTask: 20,
      progressTask: 2,
      completeTask: 16,
      users: [
        {
          id: 1,
          name: "Abdillah Firdaus",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
          id: 1,
          name: "Abdillah Firdaus",
          image: "https://avatars.githubusercontent.com/u/59114266?v=4"
        }
      ]
    },
  ]

  const statData = {
    'waiting': 26,
    'progress': 9,
    'complete': 9,
  }

  const data = {
    labels: [
      'Waiting',
      'On progress',
      'Complete',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: Object.values(statData),
      backgroundColor: [
        'rgb(255, 177, 50)',
        'rgb(9, 199, 225)',
        'rgb(0, 203, 114)',
      ],
      hoverOffset: 4
    }]
  };

  return (
    <div className='home'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='col-span-4 lg:col-span-3 space-y-6'>
          <Collapse
            text="Favorites"
            show={true}
          >
            <div className='my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
              {
                recentProject.map((project, i) => (
                  <Card
                    key={i}
                  >
                    <span className='font-semibold'>{project.name}</span>
                    <span className='text-xs text-gray-500'>{project.type}</span>
                    <div className='py-4 space-y-2 text-xs font-medium'>
                      <div className='flex items-center justify-between text-warning'>
                        <span>Waiting Task</span>
                        <span>{project.waitingTask}</span>
                      </div>
                      <div className='flex items-center justify-between text-primary'>
                        <span>Progress Task</span>
                        <span>{project.progressTask}</span>
                      </div>
                      <div className='flex items-center justify-between text-success'>
                        <span>Complete Task</span>
                        <span>{project.completeTask}</span>
                      </div>
                    </div>
                    <div className='flex pt-4 space-x-2'>
                      {
                        project.users.map((user, i) => (
                          <Avatar
                            key={i}
                            img={user.image}
                          />
                        ))
                      }
                    </div>
                  </Card>
                ))
              }
            </div>
          </Collapse>
          <Collapse
            text="Recent Project"
            show={true}
          >
            <div className='mt-4'>
              <div className='border-t border-b p-3'>
                <span className='font-medium'></span>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='col-span-4 lg:col-span-1'>
          <Card>
            <span className='text-center mb-4 font-medium text-gray-500'>Statistic</span>
            <Pie data={data} />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home