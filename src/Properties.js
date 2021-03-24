import React from "react";

import "./Properties.css";

export default function Properties(props) {
  return ( <div className="row">
            <div className="col-6">
            <span className="text-capitalize" id="description">{props.description}</span>
            <img src='/img/currently/01d.png' alt="sunny" className="currently-icon" id="icon" />
           </div> 
           <div className="col-3 property-table properties">
            <br />
             humidity wind
           </div>
           <div className="col-3 property-table">
            <br />
            <span id="humidity">{props.humidity}</span>%
            <br />
            <span id="wind">{props.wind}</span> km/h
           </div>
          </div>

  )
}