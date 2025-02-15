import React from 'react';

interface WeatherIconProps {
  condition: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
  const getIcon = (condition: string): string => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return '☀️';
      case 'rainy':
        return '🌧️';
      case 'cloudy':
        return '☁️';
      case 'partly cloudy':
        return '⛅';
      default:
        return '🌤️';
    }
  };

  return <span className="weather-icon">{getIcon(condition)}</span>;
};

export default WeatherIcon;
