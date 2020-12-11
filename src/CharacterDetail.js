import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const dataBuffer = await fetch(
      `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${id}.json`
    );
    const data = await dataBuffer.json();
    console.log(data);
    setCharacter(data);
  };
  console.log(character);
  return (
    <div className="container mx-auto max-w-xl pt-8 min-h-screen">
      <h1 className="text-4xl mb-2  pb-10 font-semibold text-center capitalize">
        {character.name}
      </h1>
      <img
        className="mx-auto h-96 pb-5"
        src={character.image}
        alt={character.name}
      />
      <div style={{ width: "18rem", float: "left" }}>
        {" "}
        <p>
          <span className="font-bold mr-2">Hair Color: </span>
          {character.hairColor}
        </p>
        <p>
          <span className="font-bold mr-2">Skin color: </span>
          {character.skinColor}
        </p>
        <p>
          <span className="font-bold mr-2">Died: </span>

          {character.died
            ? `${character.died} at ${character.diedLocation}`
            : "not ded yet"}
        </p>
        <p>
          <span className="font-bold mr-2">Homeworld: </span>
          {character.homeworld}
        </p>
        <h2 className="text-2xl mt-6 mb-2">Masters</h2>
        {character.masters ? (
          character.masters.map((affiliation, index) => (
            <p key={index}>{affiliation}</p>
          ))
        ) : (
          <p>this character doesn't have a master</p>
        )}
        <h2 className="text-2xl mt-6 mb-2">Apprentices</h2>
        {character.apprentices ? (
          character.apprentices.map((affiliation, index) => (
            <p key={index}>{affiliation}</p>
          ))
        ) : (
          <p>this character doesn't have an apprentice</p>
        )}
      </div>
      <div style={{ overflow: "hidden", textAlign: "right" }}>
        <p>
          <span className="font-bold mr-2">Weight: </span>
          {character.mass}
        </p>
        <p>
          <span className="font-bold mr-2">Height: </span>
          {character.height}
        </p>
        <p>
          <span className="font-bold mr-2">Born: </span>

          {`${character.born} at ${character.bornLocation}`}
        </p>
        <p>
          <span className="font-bold mr-2">Species: </span>
          {character.species}
        </p>
        <h2 className="text-2xl mt-6 mb-2">Affiliations</h2>
        {character.affiliations ? (
          character.affiliations.map((affiliation, index) => (
            <p key={index}>{affiliation}</p>
          ))
        ) : (
          <p>...loading</p>
        )}
      </div>
    </div>
  );
};

export default CharacterDetail;
