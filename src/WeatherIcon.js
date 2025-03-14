import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_SKY",
    "clear-sky-night": "CLEAR_SKY",
    "few-clouds-day": "FEW CLOUDS",
    "few-clouds-night": "FEW CLOUDS",
    "scattered-clouds-day": "SCATTERED CLOUDS",
    "scattered-clouds-night": "SCATTERED CLOUDS",
    "broken-clouds-day": "BROKEN CLOUDS",
    "broken-clouds-night": "BROKEN CLOUDS",
    "shower-rain-day": "SHOWER RAIN",
    "shower-rain-night": "SHOWER RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "WIND",
    "thunderstorm-night": "WIND",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#1e1e1e"
      size={props.size}
      animate={true}
    />
  );
}
