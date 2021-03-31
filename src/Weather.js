import React, { useState } from "react";
import axios from 'axios';
import DisplayWeather from "./DisplayWeather";
import Forecast from "./Forecast";
import Loader from "react-loader-spinner";


import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed), 
      humidity: Math.round(response.data.main.humidity),
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      feelsLike: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "e2a4187aa3a4eb6d65c629a7f3e2bfd7"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }

  function searchLocation(position) {
    const apiKey = "e2a4187aa3a4eb6d65c629a7f3e2bfd7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
    }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  };

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
      <div className="row">
        <div className="city col-6">
         <h1 id="city">{weatherData.city}</h1>
        </div>
        <div className="col-6">
          <form id="city-form" onSubmit={handleSubmit}>
            <input
              type="search"
              id="city-input"
              placeholder="enter your City ..."
              autoFocus="on"
              className="form-control enter shadow-sm border-0"
              onChange={handleCityChange}
            />
            <br />
            <input
              type="submit"
              value="search"
              className="submit shadow-sm"
              id="search-form"
            />
            <input
              type="submit"
              value="current"
              className="current shadow-sm"
              id="current-location"
              onClick={getCurrentLocation}
            />
          </form>
          </div>
        </div>
        <DisplayWeather data={weatherData} />
        <Forecast data={weatherData} />
    </div>
      );
  } else {
    search();
    return (
    <Loader
      type="Bars"
      color="#03275D"
      height={100}
      width={650}
      timeout={3000} //3 secs
    />
    )
  }
}