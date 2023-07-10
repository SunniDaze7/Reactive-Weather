import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import cloudy from "../assets/Cloudy.svg"


function WeatherCard(props) {
  if(props.data.forecast == 'Sunny'){
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.data.name}</h3>
            <h5 className="card-text">T{props.data.temperature}</h5>
            <h5 className="card-text">{props.data.forecast}</h5>
        </div>
    </div>
  );
  } else if(props.data.forecast == 'Rainy'){
    return (
      <div className = "card">
          <div className = "img-container">
              <img className="card-img-top" src = {rainy} alt="Card image cap" id = "icon"/>
          </div>
          <div class="card-body">
              <h3 className="card-title">{props.data.name}</h3>
              <h5 className="card-text">T{props.data.temperature}</h5>
              <h5 className="card-text">{props.data.forecast}</h5>
          </div>
      </div>
    );
    } else if(props.data.forecast == 'Cloudy'){
      return (
        <div className = "card">
            <div className = "img-container">
                <img className="card-img-top" src = {cloudy} alt="Card image cap" id = "icon"/>
            </div>
            <div class="card-body">
                <h3 className="card-title">{props.data.name}</h3>
                <h5 className="card-text">T{props.data.temperature}</h5>
                <h5 className="card-text">{props.data.forecast}</h5>
            </div>
        </div>
      );
      } else if(props.data.forecast == 'Partly Cloudy'){
        return (
          <div className = "card">
              <div className = "img-container">
                  <img className="card-img-top" src = {partlyCloudy} alt="Card image cap" id = "icon"/>
              </div>
              <div class="card-body">
                  <h3 className="card-title">{props.data.name}</h3>
                  <h5 className="card-text">T{props.data.temperature}</h5>
                  <h5 className="card-text">{props.data.forecast}</h5>
              </div>
          </div>
        );
        }
};

// Export the WeatherCard
module.exports = WeatherCard