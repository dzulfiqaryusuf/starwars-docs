import React, { useState, useEffect } from "react";
import Character from "./Character";
import "./CharacterList.css";
import SearchBar from "./SearchBar";
const CharacterList = ({ data }) => {
  const [searchField, setSearchField] = useState("");
  const filteredCharacters = data.filter((character) =>
    character.name.toLowerCase().includes(searchField.toLowerCase())
  );
  const Characters = filteredCharacters.map((chunk) => {
    return <Character chunk={chunk} key={chunk.id} />;
  });
  return (
    <div>
      <h1 className="text-6xl font-bold text-center m-20">Star Wars Docs</h1>

      <SearchBar handleChange={(e) => setSearchField(e.target.value)} />
      <div className="character">{Characters}</div>
    </div>
  );
};

export default CharacterList;
