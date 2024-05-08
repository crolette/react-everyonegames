import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { GameContext } from "../../pages/App";

export default function Search({  }) {

const { handleSearch } = useContext(GameContext);

  function handleChange(e) {
    e.target.value.length >= 3 ? handleSearch(e.target) : null
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch(event.target);
      event.target.value = '';
    }
  }

  function handleClick(event) {
    handleSearch(event.target.nextElementSibling);
    event.target.nextElementSibling.value = '';
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
