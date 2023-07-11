import React from 'react';
import { useState } from 'react'
// Import data and WeatherCard here
const WeatherCard = require('./components/WeatherCard')
import Location from './components/location'
const cities = require('./data')



function App() {
    const [location, setLocation] = useState('New York City')
    // const found = cities.find(element => element.city == 'New York City')
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                {/* {cities.map((city)=> <WeatherCard data = {city}/>)} */}
                <Location data = {cities} location={location} setLocation={setLocation}/>
                {/* <Location data = {cities} location = {location} setLocation={setLocation}/> */}
            </div>
        </>
    )
}

export default App;