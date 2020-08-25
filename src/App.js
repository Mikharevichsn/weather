import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLocationCity } from './redux/actions';
import CityWeather from './components/CityWeather/CityWeather';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocationCity());
  }, []);

  return (
    <Switch>
      <Route path="/:city">
        <div>123</div>
        <CityWeather />
      </Route>
      <Route path="/">
        <div className="App">
          <CityWeather />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
