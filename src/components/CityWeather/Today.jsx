import React from 'react';
import { useSelector } from 'react-redux';

export default function Today() {
  const weatherData = useSelector((state) => state.weatherData);
  const locationCity = useSelector((state) => state.locationCity.city);
  console.log(weatherData);
  return (
    <>
      <h2>{weatherData && Math.round(weatherData.current.temp)}°C</h2>
      <p>{locationCity && locationCity.name_en}</p>
      <p>
        {weatherData &&
          `${weatherData.current.weather[0].main}, Wind - ${weatherData.current.wind_speed} meter per second`}
      </p>
    </>
  );
}
