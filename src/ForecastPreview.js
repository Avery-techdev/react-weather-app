import React from "react";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp)

    return `${temperature}°C`
  }

  return ( 
    <div className="col-2">
      {hours()}
      <img src={`/img/forecast/${props.icon}.png`} alt={props.description} className="forecast-icon" id="icon" />
      {temperature()}
    </div>
    
  )

}