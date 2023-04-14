import React, { useEffect, useState } from 'react'
import Rain from './images/rain.png'
import Wind from './images/wind.png'
import Pressure from './images/pressure.png'
import Humidity from './images/humidity.png'
import Line from './images/Line.png'
import './weather.css'

export default function Weather() {

    const [response, setresponse] = useState({})
    const [loading, setloading] = useState(true)
    const [error, setError] = useState()
    const [arr, setArr] = useState([])

    // const [latitude, setlatitude] = useState('');
    // const [longitude, setlongitude] = useState('');

    useEffect(() => {

        // const successCallback = (position) => {
        //     setlatitude(position.coords.latitude)
        //     setlongitude(position.coords.longitude)
        //     // console.log(latitude,longitude)
        // };

        // const errorCallback = (error) => {
        //     console.log(error);
        // };
        // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

        let url = `http://api.weatherapi.com/v1/current.json?key=3e6bba959e3e46bf965142522231404&q=gwalior&aqi=no`
        console.log(url);
        const fetchWeather = async () => {

            await fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((result) => {
                    setresponse(result)
                    setloading(false)
                    setArr(result.location.localtime.split(" "));
                    console.log(result)
                })
                .catch((error) => {
                    setError(error)
                })
        }
        fetchWeather();
    }, [/*latitude,longitude*/])

    if (loading) {
        return <h1 className='errorLoad'>loading...</h1>
    }
    else if (error) {
        return <h1 className='errorLoad'>Error, try refresh...</h1>
    }
    else return (
        <div className='weather-div'>
            <div className="date-time">
                <h1>{arr[0]}</h1>
                <h1>{arr[1]}</h1>
            </div>
            <div className="temp">
                <div className='weath'>
                    <img src={Rain} alt="weather" />
                    <p>{response.current.condition.text}</p>
                </div>
                <img src={Line} alt="line" className="line" />
                <div className='press'>
                    <h1>{response.current.temp_c}°C</h1>
                    <div>
                        <img src={Pressure} alt="pressure" />
                        <div><span>{response.current.pressure_mb} mbar <br />Pressure</span></div>
                    </div>
                </div>
                <img src={Line} alt="line" className="line" />
                <div className='humid-wind'>
                    <div className='div-wind'>
                        <img src={Wind} alt="wind" />
                        <div><span>{response.current.wind_kph} km/h <br />Wind</span></div>
                    </div>
                    <div className='div-humid'>
                        <img src={Humidity} alt="Humidity" />
                        <div><span>{response.current.humidity}% <br />Humidity</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
