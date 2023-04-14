import React from 'react'
import './homepage.css'
import Profile from './component/profile.jsx'
import Weather from './component/weather.jsx'
import News from './component/news.jsx'

export default function Homepage() {
  return (
    <div className='home'>
      <div className="profile-weather">
        <Profile />
        <Weather />
      </div>
      <div className="news">
        <News/>
      </div>
    </div>
  )
}
