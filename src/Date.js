import React from "react";

import "./Date.css";

export default function Date (props) {
return ( <div className="col-6" id="current-date">
          {props.date}
         </div>
)
}