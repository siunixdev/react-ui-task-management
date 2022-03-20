import React, { useEffect, useState } from 'react'
import './Sidebar.sass'
import { Link, useLocation } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Collapse from '../../components/Collapse/Collapse'
import { useDispatch } from 'react-redux'
import { setTitle } from '../../actions/app'
import {
  HomeIcon,
  ClipboardCheckIcon,
  CalendarIcon,
  UserGroupIcon,
  DocumentReportIcon,
  StarIcon,
  SearchIcon,
  FolderOpenIcon,
  PlusSmIcon
} from '@heroicons/react/outline'

const Sidebar = () => {
  const dispatch = useDispatch();
  const [topbarTitle, setTopbarTitle] = useState("")

  const location = useLocation()
  const { pathname } = location
  const activeLocation = pathname.split('/')[1]

  useEffect(() => {
    dispatch(setTitle(topbarTitle))
  }, [topbarTitle])

  var sidebarMenu = [
    {
      text: 'Home',
      icon: <HomeIcon className='icon' />,
      link: 'home'
    },
    {
      text: 'My Task',
      icon: <ClipboardCheckIcon className='icon' />,
      link: 'task'
    },
    {
      text: 'My Plan',
      icon: <CalendarIcon className='icon' />,
      link: 'plan'
    },
    {
      text: 'People',
      icon: <UserGroupIcon className='icon' />,
      link: 'people'
    },
    {
      text: 'Reporting',
      icon: <DocumentReportIcon className='icon' />,
      link: 'reporting'
    },
  ]

  var favorites = [
    {
      text: "App Development",
      to: "/",
    },
    {
      text: "Web Design",
      to: "/",
    },
  ]

  return (
    <div className='sidebar'>
      <div className='brand-logo'>
        <span className='brand-logo__text'>
          YOUR BRAND
        </span>
      </div>
      <div>
        <nav>
          <div className='sidebar__menu'>
            <ul>
              {
                sidebarMenu.map((menu, i) => (
                  <Link
                    onClick={() => setTopbarTitle(menu.text)}
                    key={i}
                    to={process.env.REACT_APP_BASE_URL + menu.link}
                  >
                    <li
                      className={`menu ${activeLocation === menu.link ? "menu__item--active" : "menu__item"}`}>
                      {menu.icon}
                      <span>{menu.text}</span>
                    </li>
                  </Link>
                ))
              }
            </ul>
          </div>
          <div className='sidebar__projects'>
            <Collapse
              text="Favorites"
              show={true}
            >
              {
                favorites.map((fav, i) => (
                  <div
                    key={i}
                    className='project__item'
                  >
                    <div className="icon text-yellow-400">
                      <StarIcon />
                    </div>
                    <span>{fav.text}</span>
                  </div>
                ))
              }
            </Collapse>
          </div>
          <div className='sidebar__projects'>
            <div className='project__option'>
              <div className='search'>
                <div className='search__icon'>
                  <SearchIcon className='icon' />
                </div>
                <input
                  type="text"
                  placeholder='Search'
                  className='search__input'
                />
              </div>
              <Button
                icon={<PlusSmIcon />}
                type="btn--primary btn--pill"
              />
            </div>
            <div className='my-4'>
              <span className='font-semibold text-gray-500'>Projects</span>
              <div
                className='project__item'
              >
                <FolderOpenIcon className='icon' />
                <span>Project Name</span>
              </div>
            </div>
          </div>
        </nav>
      </div >
    </div >
  )
}

export default Sidebar