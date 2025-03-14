import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast({ coordinates }) {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    if (coordinates) {
      const apiKey = "43008a6ae95edac1643c1odtb4f58d13";
      const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&key=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    }
  }, [coordinates]);

  function handleResponse(response) {
    // Assuming the response contains a 'forecast' array
    if (response.data && Array.isArray(response.data.forecast)) {
      setForecastData(response.data.forecast);
    } else {
      console.error("Unexpected response structure:", response.data);
    }
  }

  if (forecastData.length > 0) {
    return (
      <div className="WeatherForecast">
        <h2>Forecast</h2>
        {forecastData.map((day, index) => (
          <div key={index}>
            <h3>{new Date(day.time * 1000).toLocaleDateString()}</h3>
            <p>{day.condition.description}</p>
            <img src={day.condition.icon_url} alt={day.condition.description} />
            <p>Temperature: {day.temperature.current}°C</p>
            <p>Wind: {day.wind.speed} m/s</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Loading forecast...</div>;
  }
}
