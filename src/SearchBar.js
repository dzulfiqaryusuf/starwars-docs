import React from "react";

const SearchBar = ({ handleChange }) => {
  return (
    <div className="text-center mb-10">
      <input
        type="search"
        placeholder="search characters"
        className="text-center"
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBar;
