import React, {useEffect, useState} from 'react';
import '../styles/Footer.scss'
import {setGlobalState, useGlobalState} from "../state";
import sun from '../images/sun.png'

const Footer = () => {
    const [city, setCity] = useState('')
    const [temp, setTemp] = useState(0)
    const [icon, setIcon] = useState('')
    const [weatherInfo, setWeatherInfo] = useState('')
    const [showWeather, setShowWeather] = useState(true)

    let weatherIcon = 'http://openweathermap.org/img/wn/10d.png'

    const [darkTheme] = useGlobalState('darkTheme')

    const [globalWeather] = useGlobalState('showWeather')

    let mode = localStorage.getItem('theme')

    const weather = async () => {

        const link = 'https://api.openweathermap.org/data/2.5/weather?lat=49.34&lon=23.51&units=metric&lang=ua&appid=522f7ec766b55c89fccbc47a4e7a72c0'

        const response = await fetch(link, {
            method: 'GET'
        })

        const responseResult = await response.json()

        getWeather(responseResult)
    }

    const getWeather = (data: {
        name: string
        main: {
            temp: number
        }
        weather: [
            num: {
                description: string
                icon: string
            }
        ]
    }) => {
        setCity(data.name)
        setTemp(Math.round(data.main.temp))
        setWeatherInfo(data.weather[0].description)
        setIcon(data.weather[0].icon)
    }

    useEffect(
        () => {weather()}
    )

    const date = new Date()

    let weekday = date.getDay()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let weekdayStr = ''

    if (weekday === 0) {
        weekdayStr = 'Неділя'
    }
    else if (weekday === 1) {
        weekdayStr = 'Понеділок'
    }
    else if (weekday === 2) {
        weekdayStr = 'Вівторок'
    }
    else if (weekday === 3) {
        weekdayStr = 'Середа'
    }
    else if (weekday === 4) {
        weekdayStr = 'Четвер'
    }
    else if (weekday === 5) {
        weekdayStr = "П'ятниця"
    }
    else if (weekday === 6) {
        weekdayStr = 'Субота'
    }

    // ------- Іконка погоди ------- //

    if (icon === '01d') {
        weatherIcon = 'http://openweathermap.org/img/wn/01d.png'
    }
    else if (icon === '02d') {
        weatherIcon = 'http://openweathermap.org/img/wn/02d.png'
    }
    else if (icon === '03d') {
        weatherIcon = 'http://openweathermap.org/img/wn/03d.png'
    }
    else if (icon === '04d') {
        weatherIcon = 'http://openweathermap.org/img/wn/04d.png'
    }
    else if (icon === '09d') {
        weatherIcon = 'http://openweathermap.org/img/wn/09d.png'
    }
    else if (icon === '10d') {
        weatherIcon = 'http://openweathermap.org/img/wn/10d.png'
    }
    else if (icon === '11d') {
        weatherIcon = 'http://openweathermap.org/img/wn/11d.png'
    }
    else if (icon === '13d') {
        weatherIcon = 'http://openweathermap.org/img/wn/13d.png'
    }
    else if (icon === '50d') {
        weatherIcon = 'http://openweathermap.org/img/wn/50d.png'
    }
    else if (icon === '01n') {
        weatherIcon = 'http://openweathermap.org/img/wn/01n.png'
    }
    else if (icon === '02n') {
        weatherIcon = 'http://openweathermap.org/img/wn/02n.png'
    }
    else if (icon === '03n') {
        weatherIcon = 'http://openweathermap.org/img/wn/03n.png'
    }
    else if (icon === '04n') {
        weatherIcon = 'http://openweathermap.org/img/wn/04n.png'
    }
    else if (icon === '09n') {
        weatherIcon = 'http://openweathermap.org/img/wn/09n.png'
    }
    else if (icon === '10n') {
        weatherIcon = 'http://openweathermap.org/img/wn/10n.png'
    }
    else if (icon === '11n') {
        weatherIcon = 'http://openweathermap.org/img/wn/11n.png'
    }
    else if (icon === '13n') {
        weatherIcon = 'http://openweathermap.org/img/wn/13n.png'
    }
    else if (icon === '50n') {
        weatherIcon = 'http://openweathermap.org/img/wn/50n.png'
    }

    // ------- //

    const setWeatherButton = (show: boolean) => {
        localStorage.setItem('show',  String(show))
    }

    function showWeatherHandler() {
        setGlobalState('showWeather', prev => !prev)

        setWeatherButton((show !== 'true'))

    }

    const show = localStorage.getItem('show')

    return (
        <div className={mode === 'false' ? "footer" : "footer footer_dark"}>
            <div>Дрогобич, 2023 рік</div>
            {show === 'false' ?
                <div className="footer__widget">
                    <div className="left_panel">
                        <div className="weekday">
                            {weekdayStr}
                        </div>
                        <div className="date">
                            {day}.{month}.{year}
                        </div>
                    </div>
                    <div className="right_panel">
                        <div className="temp">
                            {temp}&deg;
                            <div className="weather_image_container">
                                <img className="weather_image" src={weatherIcon} alt=""/>
                            </div>
                        </div>
                        <div className="weather_info">
                            {weatherInfo}
                        </div>
                    </div>
                </div>
                : <div></div>
            }
                <button className="weather_button" onClick={showWeatherHandler} >{show === 'false' ? '×' : '^'}</button>
        </div>
    );
};

export default Footer;