import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather/>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/jekaterinavaleviciene/"
            target="_blank"
            rel="noreferrer"
          >
            Jekaterina Valeviciene
          </a>{" "}
          and is
          <a
            href="https://github.com/JK932-coder/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
       } 

 
