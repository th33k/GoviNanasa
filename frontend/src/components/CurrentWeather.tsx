import React from 'react';
import WeatherIcon from './WeatherIcon';


interface WeatherProps {
  city: string;
  region: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  condition: string;
}

interface CurrentWeatherProps {
  weather: WeatherProps;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weather }) => {
  return (
    <div className="current-weather">
      <div className="location">
        <h2>{weather.city}</h2>
        <p>{weather.region}, {weather.country}</p>
      </div>
      <div className="weather-info">
        <div className="weather-icon">
          <WeatherIcon condition={weather.condition} />
          <p>{weather.condition}</p>
        </div>
        <div className="weather-details">
          <h1>{weather.temperature}°C</h1>
          <p>Feels like {weather.feelsLike}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind: {weather.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
