import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York, USA</h1>
      <ul>
        <li>Saturday 11:05</li>
        <li>Cloudly</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
            alt="Clear"
            id="icon"
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Humadity</li>
            <li>Participitatiom</li>
            <li>Speed of wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
