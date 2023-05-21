import React from 'react';
import { WeatherReducer } from './Reducer';
import { useReducer } from 'react';
import { useContext } from 'react';

const WeatherAppContext = React.createContext();

const WeatherAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WeatherReducer, {
    city: {
      city: 'Bangalore',
      lat: '12.9699',
      lng: '77.5980',
      country: 'India',
      iso2: 'IN',
      admin_name: 'Karnātaka',
      capital: 'admin',
      population: '13707000',
      population_proper: '8443675',
    },
    current: '',
    daily: '',
  });

  return (
    <>
      <WeatherAppContext.Provider value={{ state, dispatch }}>
        {children}
      </WeatherAppContext.Provider>
    </>
  );
};

export default WeatherAppProvider;

export const UseWeatherAppContext = () => {
  return useContext(WeatherAppContext);
};
