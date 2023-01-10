import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project created by Olha Kolisnyk{" "}
          <a href="https://github.com/Olha1304/final-homework-5.git">
            open-sourced in GitHub{" "}
          </a>
          and hosted by Netlify
        </footer>
      </div>
    </div>
  );
}
