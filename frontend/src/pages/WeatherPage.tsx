import React from 'react';
import CurrentWeather from '../components/CurrentWeather';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';


// Define TypeScript interfaces for data structures
interface WeatherData {
  city: string;
  region: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  condition: string;
}

interface HourlyData {
  time: string;
  temperature: number;
  condition: string;
}

interface DailyData {
  date: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
}

const WeatherPage: React.FC = () => {
  // Sample weather data
  const weatherData: WeatherData = {
    city: 'Willorawaththa',
    region: 'Western Province',
    country: 'Sri Lanka',
    temperature: 28,
    feelsLike: 30,
    humidity: 75,
    windSpeed: 10,
    condition: 'Sunny',
  };

  const hourlyData: HourlyData[] = [
    { time: '12 PM', temperature: 28, condition: 'Sunny' },
    { time: '1 PM', temperature: 29, condition: 'Partly Cloudy' },
    { time: '2 PM', temperature: 30, condition: 'Cloudy' },
    { time: '3 PM', temperature: 29, condition: 'Rainy' },
  ];

  const dailyData: DailyData[] = [
    { date: 'Mon', maxTemp: 30, minTemp: 25, condition: 'Sunny' },
    { date: 'Tue', maxTemp: 29, minTemp: 24, condition: 'Partly Cloudy' },
    { date: 'Wed', maxTemp: 28, minTemp: 23, condition: 'Rainy' },
    { date: 'Thu', maxTemp: 27, minTemp: 22, condition: 'Cloudy' },
    { date: 'Fri', maxTemp: 26, minTemp: 21, condition: 'Sunny' },
  ];

  return (
    <div className="weather-page">
      <CurrentWeather weather={weatherData} />
      <HourlyForecast hourlyData={hourlyData} />
      <DailyForecast dailyData={dailyData} />
    </div>
  );
};

export default WeatherPage;
