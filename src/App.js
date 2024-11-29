import React, { useState } from 'react';
import Weather from './Weather';
import Search from './Search';
import './index.css';

const App = () => {
  const [city, setCity] = useState("Toronto"); // Default city

  const handleCityChange = (newCity) => {
    setCity(newCity); // Update city when search is performed
  };

  return (
    <div>
      {/* Weather Data (Top Middle) */}
      <div>
        <Weather city={city} />
      </div>

      {/* Search Bar (Bottom Middle) */}
      <div className="search-container">
        <Search onSearch={handleCityChange} />
      </div>
    </div>
  );
};

export default App;
