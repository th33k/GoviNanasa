import React from 'react';
import WeatherIcon from './WeatherIcon';


interface HourlyData {
  time: string;
  temperature: number;
  condition: string;
}

interface HourlyForecastProps {
  hourlyData: HourlyData[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourlyData }) => {
  return (
    <div className="hourly-forecast">
      <h3>Hourly Forecast</h3>
      <div className="hourly-list">
        {hourlyData.map((hour, index) => (
          <div key={index} className="hourly-item">
            <p>{hour.time}</p>
            <WeatherIcon condition={hour.condition} />
            <p>{hour.temperature}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
