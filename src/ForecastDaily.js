import React from "react";

export default function ForecastDaily(props) {
  function maxTemperature(){
    let temperature = Math.round(props.dailyForecast[0].temp.max); 
    return `${temperature}°`;
  }

  function minTemperature(){
    let temperature = Math.round(props.dailyForecast[0].temp.min); 
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.dailyForecast[0].dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col">
            <div className="Forecast-day">
              {day()}
            </div>
            <img src={`/img/forecast/${props.dailyForecast[0].weather[0].icon}.png`} alt={props.description} className="forecast-icon" id="icon" />
            <div className="Forecast-temperatures">
              <span className="Forecast-temperature-max">
              {maxTemperature()}
              </span>
              <span className="Forecast-temperature-min">
              {minTemperature()}
              </span>
            </div> 
          </div>
  )
}