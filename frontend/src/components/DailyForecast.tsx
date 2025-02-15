import React from 'react';
import WeatherIcon from './WeatherIcon';


interface DailyData {
  date: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
}

interface DailyForecastProps {
  dailyData: DailyData[];
}

const DailyForecast: React.FC<DailyForecastProps> = ({ dailyData }) => {
  return (
    <div className="daily-forecast">
      <h3>5-Day Forecast</h3>
      <div className="daily-list">
        {dailyData?.map((day, index) => (
          <div key={index} className="daily-item">
            <p>{day.date}</p>
            <WeatherIcon condition={day.condition} />
            <p>{day.maxTemp}°C / {day.minTemp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
