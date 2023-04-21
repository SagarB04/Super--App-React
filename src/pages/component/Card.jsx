import React from 'react'
import './card.css'
import Action from './images/action.png'
import Fantasy from './images/fantasy.png'
import Horror from './images/horror.png'
import Fiction from './images/fiction.png'
import Romance from './images/romance.png'
import Drama from './images/drama.png'
import Music from './images/music.png'
import Thriller from './images/thriller.png'
import Western from './images/western.png'

export default function Card(props) {
    
    
    if (props.name === 'Action') {
        return (
            <div className='card card-1'>
                <div><h3>{props.name}</h3></div>
                <img src={Action} alt="img" />
            </div>
        )
    }
    if (props.name === 'Drama') {
        return (
            <div className='card card-2'>
                <div><h3>{props.name}</h3></div>
                <img src={Drama} alt="img" />
            </div>
        )
    }
    if (props.name === "Romance") {
        return (
            <div className='card card-3'>
                <div><h3>{props.name}</h3></div>
                <img src={Romance} alt="img" />

            </div>
        )
    }
    if (props.name === 'Thriller') {
        return (
            <div className='card card-4'>
                <div><h3>{props.name}</h3></div>
                <img src={Thriller} alt="img" />

            </div>
        )
    }
    if (props.name === 'Western') {
        return (
            <div className='card card-5'>
                <div><h3>{props.name}</h3></div>
                <img src={Western} alt="img" />

            </div>
        )
    }
    if (props.name === "Horror") {
        return (
            <div className='card card-6'>
                <div><h3>{props.name}</h3></div>
                <img src={Horror} alt="img" />

            </div>
        )
    }
    if (props.name === "Fantasy") {
        return (
            <div className='card card-7'>
                <div><h3>{props.name}</h3></div>
                <img src={Fantasy} alt="img" />

            </div>
        )
    }

    if (props.name === 'Music') {
        return (
            <div className='card card-8'>
                <div><h3>{props.name}</h3></div>
                <img src={Music} alt="img" />

            </div>
        )
    }

    if (props.name === 'Fiction') {
        return (
            <div className='card card-9'>
                <div><h3>{props.name}</h3></div>
                <img src={Fiction} alt="img" />

            </div>
        )
    }
}
