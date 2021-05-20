import React from "react";

export default function ForecastDaily(props) {
  function maxTemperature(){
    let temperature = Math.round(props.dailyForecast.temp.max); 
    return `${temperature}°`;
  }

  function minTemperature(){
    let temperature = Math.round(props.dailyForecast.temp.min); 
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.dailyForecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col">
          <div className="Forecast-day">
              {day()}
            </div>
            <img src={`/img/forecast/${props.dailyForecast.weather[0].icon}.png`} alt={props.description} className="forecast-icon" id="icon" />
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