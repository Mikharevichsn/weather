import React from 'react';
import { useSelector } from 'react-redux';

export default function Tomorrow() {
  const weatherData = useSelector((state) => state.weatherData);
  const locationCity = useSelector((state) => state.locationCity.city);
  return (
    <>
      <h2>{weatherData && Math.round(weatherData.daily[1].temp.day)}°C</h2>
      <p>{locationCity && locationCity.name_en}</p>
      <p>
        {weatherData &&
          `${weatherData.daily[1].weather[0].main}, Wind - ${weatherData.daily[1].wind_speed} meter per second`}
      </p>
    </>
  );
}
