import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastHourly from "./ForecastHourly";
import ForecastDaily from "./ForecastDaily";

import "./Forecast.css";


export default function Forecast(props) {
  const icon = props.data.icon;
  const description = props.data.description;
  const [loaded, setLoaded] = useState(false);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  function handleForecastResponse(response) {
    console.log(response.data);
    setHourlyForecast(response.data.hourly);
    setDailyForecast(response.data.daily);
    setLoaded(true);
    
  }

  if (loaded) {
    console.log(dailyForecast)
    return (
      <div className="weather-forecast">
        <div className="row">
        {hourlyForecast.map(function(hourlyForecast, index){
          if (index > 0 && index < 6) {
            return (
              <div key={index}> 
                <ForecastHourly data={hourlyForecast} icon={icon} description={description} />
              </div>
            ) 
            
          } 
          return null;
        })}
        </div>
        <div className="row daily">
          {dailyForecast.map(function(dailyForecast, index){
            if (index < 5){
              return (
                <div className="dailyForecast" key={index}> 
                  <ForecastDaily dailyForecast={dailyForecast} description={description} />
                </div>
                
              )
            }
            return null;
          })}
          
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
