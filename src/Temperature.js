import React from "react";

import "./Temperature.css"

export default function Temperature() {
return (
<div className="col-6 weather-temperature">
          <h2>
            <div id="temperature">
              1
            </div>
            <span className="units">
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
           </h2>
        </div>
)
}