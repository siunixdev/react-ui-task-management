import React from 'react'
import './People.sass'
import Card from '../../components/Card/Card'
import { PlusIcon } from '@heroicons/react/outline'

var peoples = [
  {
    name: "Steve Adams",
    email: "stvadm@gmail.com",
    jobTitle: "Owner",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Abdillah Firdaus",
    email: "abd.siunix@gmail.com",
    jobTitle: "Frontend Developer",
    photoUrl: "https://avatars.githubusercontent.com/u/59114266?v=4"
  },
  {
    name: "Mark Clone",
    email: "mclone@gmail.com",
    jobTitle: "Backend Developer",
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  },
  {
    name: "Annisa",
    email: "annisaa@gmail.com",
    jobTitle: "UI/UX Designer",
    photoUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    name: "Christina",
    email: "Chris.tina@gmail.com",
    jobTitle: "Recruiter",
    photoUrl: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  },
  {
    name: "Adek Setiadi",
    email: "adek.set@gmail.com",
    jobTitle: "Network Engineer",
    photoUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
  }
]

const People = () => {
  return (
    <div>
      <div className='mb-8'>
        <span className='title'>People</span>
      </div>
      <div className='people'>
        <Card onClick={() => alert("Add teammate Action")}>
          <div className='people__container'>
            <div className='people__photo'>
              <PlusIcon className='icon' />
            </div>
            <span className='people__add'>Add Teammate</span>
          </div>
        </Card>
        {
          peoples.map((people, i) => (
            <Card key={i}>
              <div className='people__container'>
                <img
                  src={people.photoUrl}
                  className='people__photo'
                />
                <div className='flex flex-col'>
                  <span className='people__name'>{people.name}</span>
                  <span className='people__email'>{people.email}</span>
                </div>
                <span className='people__job-title'>{people.jobTitle}</span>
              </div>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default People