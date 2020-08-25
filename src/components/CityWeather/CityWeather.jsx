import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityWeather, getWeatherByCityName } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import Today from './Today';
import Tomorrow from './Tomorrow';
import Week from './Week';

export default function CityWeather() {
  const locationCity = useSelector((state) => state.locationCity.city);

  const dispatch = useDispatch();
  const params = useParams();
  const [period, setPeriod] = useState('Today');

  console.log(params.city);

  useEffect(() => {
    if (!params.city) {
      if (locationCity) {
        dispatch(getCityWeather(locationCity.lat, locationCity.lon));
      }
    } else {
      getWeatherByCityName('Moscow');
    }
  }, [locationCity]);

  return (
    <>
      <button
        onClick={() => {
          setPeriod('Today');
        }}
      >
        Today
      </button>
      <button
        onClick={() => {
          setPeriod('Tomorrow');
        }}
      >
        Tomorrow
      </button>
      <button
        onClick={() => {
          setPeriod('Week');
        }}
      >
        Week
      </button>
      {period === 'Today' && <Today />}
      {period === 'Tomorrow' && <Tomorrow />}
      {period === 'Week' && <Week />}
    </>
  );
}
