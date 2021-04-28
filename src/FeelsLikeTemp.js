import React, { useState } from "react";

import "./FeelsLikeTemp.css";

export default function FeelsLikeTemp(props) {
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
    <span>
      <span>{props.celsius}</span>
            <span className="feelsLikeUnits">
              <span id="celsius">
            °C
            </span>
            |
          <a href="/" rel="noreferrer" id="fahrenheit" onClick={showFahrenheit}>
            °F
          </a>
            </span>
    </span>
  
  )
} else {
  return (
    <span>
      <span>{fahrenheit()}</span>
            <span className="feelsLikeUnits">
              <a href="/" rel="noreferrer" id="celsius" onClick={showCelsius}>
                °C
              </a>
              |
            
            <span id="fahrenheit">
              °F
            </span>
           </span>
    </span>
  
  )
}

}