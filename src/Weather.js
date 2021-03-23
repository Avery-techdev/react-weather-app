import React from "react";
import axios from 'axios';
import DisplayWeather from "./DisplayWeather";

import "./Weather.css";

export default function Weather() {
    return (
      <div className="row">
      <div className="city col-6">
     <h1 id="city">New York</h1>
    </div>
    <div className="col-6">
    <form id="city-form">
      <input
        type="text"
        id="city-input"
        placeholder="enter your City ..."
        autoFocus="on"
        className="form-control enter shadow-sm border-0"
      />
      <br />
      <input
        type="submit"
        value="search"
        className="submit shadow-sm"
        id="search-form"
      />
      <input
        type="submit"
        value="current"
        className="current shadow-sm"
        id="current-location"
      />
    </form>
  </div>
  <DisplayWeather />
  </div>
    )
}