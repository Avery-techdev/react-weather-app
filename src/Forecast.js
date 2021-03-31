import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

import "./Forecast.css";


export default function Forecast(props) {
  const icon = props.data.icon;
  const description = props.data.description;
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    
  }

  if (loaded && props.data.city === forecast.city.name) {
    return (
      <div className="row weather-forecast" id="forecast">
        {forecast.list.slice(0, 6).map(function(forecastItem){
          return <ForecastPreview data={forecastItem} icon={icon} description={description} />
        })}
      </div>
    )
    
  } else {
    const apiKey = "e2a4187aa3a4eb6d65c629a7f3e2bfd7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecastResponse);
  return (
    null
  );
  }

  
}
