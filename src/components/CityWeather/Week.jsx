import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

export default function Week() {
  const weatherData = useSelector((state) => state.weatherData);
  const locationCity = useSelector((state) => state.locationCity.city);
  return (
    <>
      <div className="week-weather">
        {weatherData &&
          weatherData.daily.map((day, index) => {
            return <Card key={index} weatherInfo={day} i={index} />;
          })}
      </div>
    </>
  );
}
