import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {

  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`)
  }
  let apiKey = `298146983df1f6435467782acb139467`
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Loader
        type="Puff"
        color="#FFFFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
  )
}