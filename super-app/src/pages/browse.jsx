import React from 'react'
import './browse.css'
import { Link } from 'react-router-dom'
import Movies from './component/movies.jsx'

export default function Browse() {

    const arrStr = localStorage.getItem("category")
    const arr = arrStr.split(",")

    return (
        <div className='browse'>
            <div className="nav">
                <h1>Super App</h1>
                <Link><button className='pro-img'></button></Link>
            </div>
            <div className="entertainment">

                <h2>Entertainment according to your choice</h2>
                < div className="tile">      {
                    arr.map((i) => {

                        return <>
                            <h2>{i}</h2>
                            <div>
                                <Movies title={i}/>
                            </div>
                        </>
                    })
                }
                </div>
            </div>
        </div >
    )
}
