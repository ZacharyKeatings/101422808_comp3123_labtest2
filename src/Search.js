import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() === "") {
      alert("Please enter a city name.");
      return;
    }
    onSearch(input);
    setInput("");
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
