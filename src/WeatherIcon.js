import React from "react";

export default function WeatherIcon(props) {
  if (!props.iconUrl) {
    return null; // Do not render anything if iconUrl is missing
  }
  return (
    <img
      src={props.iconUrl} // Use the icon URL from the API response
      alt={props.description} // Use the description for the alt text
      width={props.size} // Set the width of the icon
      height={props.size} // Set the height of the icon
    />
  );
}
