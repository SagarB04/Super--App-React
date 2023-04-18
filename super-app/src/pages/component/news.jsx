
import React, { useState, useEffect } from 'react'
import './news.css'

export default function News() {


  const [response, setresponse] = useState({})
  const [loading, setloading] = useState(true)
  const [error, setError] = useState()


  useEffect(() => {

    const fetchNews = async () => {
      await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=dba73668ac494f5e9f5ba5e6a743fd30")
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          setresponse(result)
          setloading(false)
        })
        .catch((error) => {
          setError(error)
          console.log(error)
        })
    }
    fetchNews();

  }, [])

  let number = Math.floor((Math.random() * 10) + 1);

  if (loading) {
    return <h1 className='errorLoad'>loading...</h1>
  }

  else if (error) {
    return <h1 className='errorLoad'>Error, try refresh...</h1>
  }

  else if (response.articles) {

    return (

      <div className='news-div'>
        <div className='newstop'>
          <div className="text">
            <h3>{response.articles[number].title}</h3>
            <span>{response.articles[number].publishedAt}</span>
          </div>
        </div>
        <div className='newsbottom'>
          {response.articles[number].content}
        </div>
      </div>
    )
  }

  else {
    return <h1 className='errorLoad'>Error, try refresh...</h1>
  }

}