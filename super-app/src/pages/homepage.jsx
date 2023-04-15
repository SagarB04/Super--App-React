import React from 'react'
import './homepage.css'
import Profile from './component/profile.jsx'
import Weather from './component/weather.jsx'
import News from './component/news.jsx'
import Note from './component/note.jsx'
import Tmer from './component/timer.jsx'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="pro-container">
      <div className='home'>

        <div className="proflie-timer">

          <div className="profile-note">

            <div className="profile-weather">
              <Profile />
              <Weather />
            </div>
            <div className="notes">
              <Note />
            </div>

          </div>
          <div className="lower">
            <Tmer />
          </div>

        </div>

        <div className="news">
          <News />
        </div>

      </div>
      <div className="browsebtn">
        <Link><button>Browse</button></Link>
      </div>
    </div>

  )
}
