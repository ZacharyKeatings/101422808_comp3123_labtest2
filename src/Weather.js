import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "19d3b0d302ca671fd390d820f8c6d8a3";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please check the city name or try again later.");
      }
    };

    fetchWeather();
  }, [city]);

  const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(0);

  if (!weatherData) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading weather data...</p>;
  }

  return (
    <div className="data-container">
      <div className="data-box">
        <h3>Location</h3>
        <p><strong>City:</strong> {weatherData.name}</p>
        <p><strong>Country:</strong> {weatherData.sys.country}</p>
        <p><strong>Temperature:</strong> {kelvinToCelsius(weatherData.main.temp)}°C</p>
        <p><strong>Feels Like:</strong> {kelvinToCelsius(weatherData.main.feels_like)}°C</p>
      </div>

      <div className="icon-container">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
        />
      </div>

      <div className="data-box">
        <h3>Weather Details</h3>
        <p><strong>Condition:</strong> {weatherData.weather[0].main}</p>
        <p><strong>Description:</strong> {weatherData.weather[0].description}</p>
        <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
        <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
      </div>
    </div>
  );
};

export default Weather;
