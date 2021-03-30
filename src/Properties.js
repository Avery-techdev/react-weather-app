import React from "react";
import FeelsLikeTemp from "./FeelsLikeTemp";

import "./Properties.css";

export default function Properties(props) {
  const feelsLike = props.feelsLike
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
            <FeelsLikeTemp celsius={feelsLike}/>
            <br />
            <span id="humidity">{props.humidity}</span>%
            <br />
            <span id="wind">{props.wind}</span> km/h
           </div>
          </div>

  )
}