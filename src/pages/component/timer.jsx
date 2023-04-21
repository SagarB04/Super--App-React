import React, { useRef, useState } from 'react'
import './timer.css'
import Up from './images/up.png'
import Down from './images/down.png'
import Song from './images/timer.mp3'

export default function Timer() {

  let hourRef = useRef()
  let minRef = useRef()
  let secRef = useRef()

  const [hourLeft, setHourleft] = useState(0)
  const [minLeft, setMinleft] = useState(0)
  const [secLeft, setSecleft] = useState(0)

  const countIncrease = (value) => {

    if (value === 'hour') {

      let num = Number(hourRef.current.value) + 1;
      hourRef.current.value = num < 10 ? '0' + num : num

    }
    if (value === 'min') {

      let num = Number(minRef.current.value) + 1;
      minRef.current.value = num < 10 ? '0' + num : num

    }
    if (value === 'sec') {

      let num = Number(secRef.current.value) + 1;
      secRef.current.value = num < 10 ? '0' + num : num

    }
  }

  const countDecrease = (value) => {

    if (value === 'hour') {
      if (hourRef.current.value > 0) {
        let num = Number(hourRef.current.value) - 1;
        hourRef.current.value = num < 10 ? '0' + num : num
      }
    }

    if (value === 'min') {
      if (minRef.current.value > 0) {
        let num = Number(minRef.current.value) - 1;
        minRef.current.value = num < 10 ? '0' + num : num
      }
    }

    if (value === 'sec') {
      if (secRef.current.value > 0) {
        let num = Number(secRef.current.value) - 1;
        secRef.current.value = num < 10 ? '0' + num : num
      }
    }

  }

  let totalSecond;
  let timeInterval;


  const startCount = () => {

 

    let hour = Number(hourRef.current.value);
    let min = Number(minRef.current.value);
    let sec = Number(secRef.current.value);

    totalSecond = hour * 3600 + min * 60 + sec;

    console.log(totalSecond)

    timeInterval = setInterval(() => {
      console.log('start')
      setHourleft(Math.floor(totalSecond / 3600))
      setMinleft(Math.floor((totalSecond % 3600) / 60))
      setSecleft(totalSecond % 60)

      if (totalSecond < 1) {

        let musicply = new Audio(Song)
        musicply.play();
        clearInterval(timeInterval)
      }
      else {
        totalSecond--;
      }

    }, 1000);

  }


  return (
    <div className='timer'>

      <div className="counter">
        <div className="counting">
          {hourLeft < 10 ? '0' + hourLeft : hourLeft}:{minLeft < 10 ? '0' + minLeft : minLeft}:{secLeft < 10 ? '0' + secLeft : secLeft}
        </div>
      </div>

      <div className="counter-btn">

        <div className="set-counter">

          <div className="hours">
            <span>Hours</span>
            <img src={Up} onClick={() => { countIncrease("hour") }} alt="up" />
            <input
              type="number"
              defaultValue='00'
              id='hour'
              min='0'
              ref={hourRef}
            />
            <img src={Down} onClick={() => { countDecrease("hour") }} alt="down" />
          </div>

          <div className="colon">:</div>

          <div className="minutes">
            <span>Minutes</span>
            <img src={Up} onClick={() => { countIncrease("min") }} alt="up" />
            <input
              type="number"
              defaultValue='00'
              id='minute'
              max="59"
              min='0'
              ref={minRef}
            />
            <img src={Down} onClick={() => { countDecrease("min") }} alt="down" />
          </div>

          <div className="colon">:</div>

          <div className="seconds">
            <span>Seconds</span>
            <img src={Up} onClick={() => { countIncrease("sec") }} alt="up" />
            <input
              type="number"
              defaultValue='00'
              id='second'
              max="59"
              min='0'
              ref={secRef}
            />
            <img src={Down} onClick={() => { countDecrease("sec") }} alt="down" />
          </div>

        </div>
        <div className="btn-count">
          <button onClick={startCount}>Start</button>
        </div>

      </div>

    </div>
  )
}
