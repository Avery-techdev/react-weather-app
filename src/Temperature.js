import React, { useState } from "react";

import "./Temperature.css"

export default function Temperature(props) {
  const [unit, setUnit] = useState ("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 +32);
  }

  if (unit === "celsius") {
    return (
      <div className="col-6 weather-temperature">
        <h2>
          <div id="temperature">
            {props.celsius}
          </div>
          <span className="units">
            <span id="celsius">
            °C
            </span>
            |
          <a href="/" id="fahrenheit" onClick={showFahrenheit} >
            °F
          </a>
          </span>
        </h2>
      </div>
      )  
  } else {
    return (
      <div className="col-6 weather-temperature">
        <h2>
          <div id="temperature">
            {fahrenheit()}
          </div>
          <span className="units">
            <span>
              <a href="/" id="celsius" onClick={showCelsius} >
                °C
              </a>
              |
            </span>
            <span id="fahrenheit" >
              °F
            </span>
            
          </span>
        </h2>
      </div>
      )  
  }
  
}