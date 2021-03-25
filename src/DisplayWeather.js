import React from "react";
import Date from "./Date";
import Temperature from "./Temperature";
import Properties from "./Properties";

import "./DisplayWeather.css";

export default function DisplayWeather (props) {
 return ( 
 <div className="row box shadow-sm">
          <div className="update ">
            last updated
          </div>
          <Date date={props.data.date}/>
          <Temperature temperature={props.data.temperature} />
          <Properties feelsLike={props.data.feelsLike} wind={props.data.wind} humidity={props.data.humidity} description={props.data.description}/>
         </div>
)
}