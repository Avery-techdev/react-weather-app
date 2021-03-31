import React, { useState } from "react";
import axois from "axios";
import ForecastPreview from "./ForecastPreview";

import "./Forecast.css";
import axios from "axios";

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
    const apiKey = "298146983df1f6435467782acb139467";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecastResponse);
  return (
    null
  );
  }

  
}
