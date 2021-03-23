import React from "react";
import Date from "./Date";
import Temperature from "./Temperature";
import Properties from "./Properties";

import "./DisplayWeather.css";

export default function DisplayWeather () {
return ( <div className="row box shadow-sm">
          <div className="update">
            last updated
          </div>
          <Date />
          <Temperature />
          <Properties />
         </div>
)
}