import React, { useMemo, useState } from 'react'
import Image from './images/pen.png'
import './note.css'
export default function Note() {

  const [toggle, setToggle] = useState(true)
  const handleDisable = () => {
    setToggle(!toggle)
  }

  const [notes, setNotes] = useState(localStorage.getItem('notes') ? localStorage.getItem('notes') : '')

  const handleValue = (event) => {
    setNotes(event.target.value)
  }
  console.log(notes)

  useMemo(() => {
    localStorage.setItem("notes", notes)
  }, [notes])


  return (
    <div className='note'>

      <h1>All notes</h1>

      <textarea
        disabled={toggle}
        cols="10"
        rows="6"
        value={notes}
        onChange={handleValue}
        spellcheck="false"
      ></textarea>

      <div>
        <img onClick={handleDisable} src={Image} alt="pen" />
      </div>

    </div>
  )
}
