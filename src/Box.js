import React from "react";
import Date from "./Date";
import Temperature from "./Temperature";
import Properties from "./Properties";

import "./Box.css";

export default function Box () {
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