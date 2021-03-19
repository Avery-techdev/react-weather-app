import React from "react";

import "./Properties.css";

export default function Properties() {
  return ( <div className="row">
            <div className="col-6">
            <span id="description">sunny</span>
            <img src='/img/currently/01d.png' alt="sunny" className="currently-icon" id="icon" />
           </div> 
           <div className="col-3 property-table properties">
            <br />
             humidity wind
           </div>
           <div className="col-3 property-table">
            <br />
            <span id="humidity">30</span>%
            <br />
            <span id="wind">5</span> km/h
           </div>
          </div>

  )
}