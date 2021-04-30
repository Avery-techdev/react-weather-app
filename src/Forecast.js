import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

import "./Forecast.css";


export default function Forecast(props) {
  const icon = props.data.icon;
  const description = props.data.description;
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  function handleForecastResponse(response) {
    console.log(response.data.hourly);
    setForecast(response.data.hourly);
    setLoaded(true);
    
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="row">
        {forecast.map(function(forecast, index){
          if (index > 0 && index < 6) {
            return (
              <div key={index}> 
                <ForecastPreview data={forecast} icon={icon} description={description} />
              </div>
            ) 
            
          } 
          return null;
        })}
        </div>
        <div className="row">
          <div className="col">
            <div className="Forecast-day">
            Thu
            </div>
            <img src={`/img/forecast/${icon}.png`} alt={description} className="forecast-icon" id="icon" />
            <div className="Forecast-temperatures">
              <span className="Forecast-temperature-max">
              19°
              </span>
              <span className="Forecast-temperature-min">
              10°
              </span>
            </div> 
          </div>
        </div>
      </div>
    )
    
  } else {
    const apiKey = "e2a4187aa3a4eb6d65c629a7f3e2bfd7";
    let latitude = props.data.coordinates.lat;
    let longitude = props.data.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return (
      null
    );
  }

  
}
