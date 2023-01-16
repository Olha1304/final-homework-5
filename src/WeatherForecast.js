import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(props);
  }
  let apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>

          <WeatherIcon code="01d" />

          <div className="WeatherForecastTemp">
            <span className="WeatherForecastTempMax">19°</span>
            <span className="WeatherForecastTempMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
