import React, { useEffect, useState, useRef } from 'react'
import "./select-category.css"
import Card from "./component/Card"
import { Link } from 'react-router-dom'

export default function SelectCategory() {

    const [category, setCategory] = useState([])
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const Action = useRef();
    const Drama = useRef();
    const Romance = useRef();
    const Thriller = useRef();
    const Horror = useRef();
    const Fiction = useRef();
    const Fantasy = useRef();
    const Western = useRef();
    const Music = useRef();



    const handleCategory = (name, event) => {
        if (category && !category.includes(name)) {
            setCategory([...category, name]);
            event.currentTarget.classList.add('active')
        }
        else if (category.includes(name)) {
            removeCategory(name);
        }
    }

    const removeCategory = (categoryToRemove) => {

        setCategory((prevCategory) =>
            prevCategory.filter((category) => category !== categoryToRemove)
        )
        if (categoryToRemove === 'Action') Action.current.classList.remove('active');
        if (categoryToRemove === 'Drama') Drama.current.classList.remove('active');
        if (categoryToRemove === 'Western') Western.current.classList.remove('active');
        if (categoryToRemove === 'Thriller') Thriller.current.classList.remove('active');
        if (categoryToRemove === 'Horror') Horror.current.classList.remove('active');
        if (categoryToRemove === 'Music') Music.current.classList.remove('active');
        if (categoryToRemove === 'Fiction') Fiction.current.classList.remove('active');
        if (categoryToRemove === 'Fantasy') Fantasy.current.classList.remove('active');
        if (categoryToRemove === 'Romance') Romance.current.classList.remove('active');

    }


    const handleClick = () => {
        if (category.length >= 3) {
            setError("")
        }
        else if (category.length < 3) {
            setError("* You need to select minimum 3 categories")
        }
    }

    useEffect(() => {
        if (category.length >= 3) {
            setError("")
            setInput("/homepage");
        } else {
            setInput("");
        }

        localStorage.setItem("category", category)

    }, [input, category])

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
                    <div className="card-design" ref={Action} onClick={(e) => { handleCategory('Action', e) }} >
                        <Card
                            name="Action"
                        />
                    </div>
                    <div className='card-design' ref={Drama} onClick={(e) => { handleCategory('Drama', e) }}>
                        <Card
                            name="Drama"
                        />
                    </div>
                    <div className='card-design' ref={Romance} onClick={(e) => { handleCategory('Romance', e) }}>
                        <Card
                            name="Romance"
                        />
                    </div>
                    <div className='card-design' ref={Thriller} onClick={(e) => { handleCategory('Thriller', e) }}>
                        <Card
                            name="Thriller"
                        />
                    </div>
                    <div className='card-design' ref={Western} onClick={(e) => { handleCategory('Western', e) }}>
                        <Card
                            name="Western"
                        />
                    </div>
                    <div className='card-design' ref={Horror} onClick={(e) => { handleCategory('Horror', e) }}>
                        <Card
                            name="Horror"
                        />
                    </div>
                    <div className='card-design' ref={Fantasy} onClick={(e) => { handleCategory('Fantasy', e) }}>
                        <Card
                            name="Fantasy"
                        />
                    </div>
                    <div className='card-design' ref={Music} onClick={(e) => { handleCategory('Music', e) }}>
                        <Card
                            name="Music"
                        />
                    </div>
                    <div className='card-design' ref={Fiction} onClick={(e) => { handleCategory('Fiction', e) }}>
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
