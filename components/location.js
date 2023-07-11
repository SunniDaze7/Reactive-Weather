import React from "react";
import {useState} from 'react'
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import cloudy from "../assets/Cloudy.svg"

function Location(props) {
    const found = props.data.find(({city})=> city == props.location)
    return (
      <div className = "card">
        <h3>Your Location's Weather</h3>
           <div className = "img-container">
              { found.forecast == 'Sunny' ? <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>
              : found.forecast == 'Rainy' ? <img className="card-img-top" src = {rainy} alt="Card image cap" id = "icon"/>
              :found.forecast == 'Cloudy' ? <img className="card-img-top" src = {cloudy} alt="Card image cap" id = "icon"/> 
              : <img className="card-img-top" src = {partlyCloudy} alt="Card image cap" id = "icon"/>}
          </div>
          <div class="card-body">
              <h3 className="card-title">{found.city}</h3>
              <h5 className="card-text">{found.temperature}</h5>
              <h5 className="card-text">{found.forecast}</h5>
          </div>
      </div>
            );
    
  };
module.exports = Location