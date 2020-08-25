import React from 'react';

export default function Card({ weatherInfo, i }) {
  return (
    <>
      <div className="card">
        <h4>{Math.round(weatherInfo.temp.day)}</h4>
        <p>{`${weatherInfo.weather[0].main}, Wind - ${weatherInfo.wind_speed} meter per second`}</p>
        <h6>{i === 0 && 'Today'}</h6>
        <h6>{i === 1 && 'Tomorrow'}</h6>
      </div>
    </>
  );
}
