import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search the blog..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
