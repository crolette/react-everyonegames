import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GameContext } from "../../pages/App";
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search({  }) {
  const [searchQuery, setSearchQuery] = useState("");

const { handleSearch } = useContext(GameContext);

  function handleChange(event) {
    const query = event.target.value;
    setSearchQuery(query);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  }

  function handleClick(event) {
    console.log(event);
    handleSearch(event.target.nextElementSibling);
  }

  return (
    <>
      <div className="search">
        <button className="search-icon" onClick={handleClick}>
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="Search for your favorite game"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
}
