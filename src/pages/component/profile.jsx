import React, { useEffect, useState } from 'react'
import './profile.css'
import Img from './images/profile.png'

function Profile() {

    let cat = localStorage.getItem("category")
    const [category, setCategory] = useState(cat.split(","))

    const handleRemove = (categoryToRemove) => {
        setCategory((prevCategory) =>
            prevCategory.filter((category) => category !== categoryToRemove)
        )
    }
    useEffect(()=>{
        localStorage.setItem('category', category)
    },[category])
    
    return (
        <div className='profile'>
            <div className="image">
                <img src={Img} alt="profile" />
            </div>
            <div className="info">
                <p>{localStorage.getItem("name")}</p>
                <p>{localStorage.getItem("email")}</p>
                <h1>{localStorage.getItem("username")}</h1>
                <div className="category-container">
                    {
                        category.map((i) => {
                            return (
                                <div className='category'>
                                    {i}
                                    <span onClick={()=>{handleRemove(i)}}>X</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Profile;