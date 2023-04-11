import React, { useEffect, useState } from 'react'
import "./select-category.css"
import Card from "./component/Card"
import { Link } from 'react-router-dom'

export default function SelectCategory() {

    // const [isActive, setIsActive] = useState(false)

    const [category, setCategory] = useState([])

    const handleCategory = (name, event) => {
        if (category && !category.includes(name)) {
            setCategory([...category, name]);
        } else if (category.includes(name)) {
            removeCategory(name);
        }
        event.currentTarget.classList.toggle('active')
    }

    const removeCategory = (categoryToRemove) => {
        setCategory((prevCategory) =>
            prevCategory.filter((category) => category !== categoryToRemove)
        )
    }
    const [input,setInput] = useState("")

    useEffect(() => {
        if (category.length >= 3) {
            setError("")
            setInput("/homepage");
        }else{
            setInput("");
        }
        localStorage.setItem("category", category)

    }, [input,category])

    const [error, setError] = useState("")

    const handleClick = () => {
        if (category.length >= 3) {
            setError("")
        }
        else if (category.length < 3) {
            setError("* You need to select minimum 3 categories")
        }
    }
    return (
        <div className='outer'>

            <div className='head'>
                <h1>Super app</h1>
                <span className="big-heading">Choose your entertainment category</span>
                <div className='cate-gory'>
                    {
                        category.map((category) => {
                            return (
                                <div className='category'>
                                    {category}
                                    <span onClick={() => removeCategory(category)}>X</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className='card-div'>
                <div className="cards" >
                    <div className='card-design' onClick={(e) => { handleCategory('Action', e) }} >
                        <Card
                            name="Action"
                        />
                    </div>
                    <div className='card-design' onClick={(e) => { handleCategory('Drama', e) }}>
                        <Card
                            name="Drama"
                        />
                    </div>
                    <div className='card-design' onClick={(e) => { handleCategory('Romance', e) }}>
                        <Card
                            name="Romance"
                        />
                    </div>
                    <div className='card-design' onClick={(e) => { handleCategory('Thriller', e) }}>
                        <Card
                            name="Thriller"
                        />
                    </div>
                    <div className='card-design' onClick={(e) => { handleCategory('Western', e) }}>
                        <Card
                            name="Western"
                        />
                    </div>
                    <div className='card-design' onClick={(e) => { handleCategory('Horror', e) }}>
                        <Card
                            name="Horror"
                        />
                    </div>
                    <div className='card-design' onClick={(e) => { handleCategory('Fantasy', e) }}>
                        <Card
                            name="Fantasy"
                        />
                    </div>
                    <div className='card-design' onClick={(e) => { handleCategory('Music', e) }}>
                        <Card
                            name="Music"
                        />
                    </div>
                    <div className='card-design' onClick={(e) => { handleCategory('Fiction', e) }}>
                        <Card
                            name="Fiction"
                        />
                    </div>

                </div>
                <div className='suggetion'><i>{error}</i></div>
                <div className="btn">
                    <Link className='btn-link' to={input} ><button onClick={handleClick}>Next Page</button></Link>
                    
                </div>

            </div>
        </div>
    )
}
