import React, { useEffect, useState } from 'react'
import Loading from './images/loading.jpg'
import '../browse.css'

export default function Movies(prop) {

    const [loading, setloading] = useState(true)
    const [error, setError] = useState(false)
    const [response, setResponse] = useState()
    const category = prop.title;
    console.log(category)

    useEffect(() => {

        const fetchMovies = async () => {




            await fetch(`https://www.omdbapi.com/?apikey=65f794e1&s=${category}`)

                .then(response => response.json())
                .then(response => {

                    setResponse(response.Search)
                    console.log(response.Search)
                    setloading(false)
                })
                .catch(err => {

                    setloading(false)
                    setError(true)
                    console.log(err)
                });
        }
        fetchMovies();

    }, [category])

    if (loading) {
        return (
            <div className='tiles'>
                <img src={Loading} alt="" />
                <img src={Loading} alt="" />
                <img src={Loading} alt="" />
                <img src={Loading} alt="" />
            </div>
        )
    }

    if (error) {
        return (
            <div className='tiles'>
                <h1 className='errorLoad'>Error...</h1>
            </div>
        )
    }

    else return (
        <div className='tiles'>
            <img src={response[1].Poster} alt="" />
            <img src={response[2].Poster} alt="" />
            <img src={response[3].Poster} alt="" />
            <img src={response[4].Poster} alt="" />
        </div>
    )
}
