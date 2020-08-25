import { WEATHER_API_KEY, GOOGLE_PLACES_API_KEY } from '../apiKeys';

const { GET_LOCATION_DATA, GET_WEATHER } = require('./actionTypes');

export const getLocationCity = () => {
  return async (dispatch) => {
    const response = await fetch('http://api.sypexgeo.net/');
    const payload = await response.json();
    dispatch({
      type: GET_LOCATION_DATA,
      payload,
    });
  };
};

export const getCityWeather = (lat, lon) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
      exclude=daily&units=metric&appid=${WEATHER_API_KEY}`
    );
    const payload = await response.json();
    dispatch({
      type: GET_WEATHER,
      payload,
    });
  };
};

export const getWeatherByCityName = async (cityName) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Moscow&inputtype=textquery&fields=geometry&key=AIzaSyAv8Qbi4W1dMjdUi-BkOqQwohE6aGOMe94`
    // { method: 'GET', redirect: 'follow' }
  );
  const location = await response.text();
  console.log('location: ', location);
};

// var requestOptions = { method: 'GET', redirect: 'follow' };
