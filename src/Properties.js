import React from "react";

import "./Properties.css";

export default function Properties(props) {
  return ( <div className="row">
            <div className="col-6">
            <span className="text-capitalize" id="description">{props.description}</span>
            <img src={`/img/currently/${props.icon}.png`} alt={props.description} className="currently-icon" id="icon" />
           </div> 
           <div className="col-3 property-table properties">
            <br />
            feels like humidity wind
           </div>
           <div className="col-3 property-table weather-temperature">
           <br />
            <span id="humidity">{props.feelsLike}</span>
            <span className="feelsLikeUnits">
              <span>
              <a href="/" id="celsius" className="active">
                °C
              </a> 
              |
            </span>
            <a href="/" id="fahrenheit">
              °F
            </a>
            </span>
            <br />
            <span id="humidity">{props.humidity}</span>%
            <br />
            <span id="wind">{props.wind}</span> km/h
           </div>
          </div>

  )
}