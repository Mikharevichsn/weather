import { GET_LOCATION_DATA, GET_WEATHER } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_LOCATION_DATA:
      return {
        ...state,
        locationCity: action.payload,
      };

    case GET_WEATHER:
      return {
        ...state,
        weatherData: action.payload,
      };

    default:
      return state;
  }
};
