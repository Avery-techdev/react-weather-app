import React from "react";

import "./Search.css";

export default function Search() {
  return (
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
  );
}
