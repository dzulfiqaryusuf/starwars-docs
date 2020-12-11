import React, { useCallback } from "react";
import "./Character.css";
import { useHistory } from "react-router-dom";
const Character = ({ chunk }) => {
  const { name, id, image } = chunk;
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(`/${id}`), [history]);
  return (
    <div className="character-container" onClick={handleOnClick}>
      <img
        className="mb-10"
        alt={name}
        src={image}
        key={id}
        style={{
          height: "250px",
          width: "200px",
          display: "block",
          margin: "auto",
          paddingTop: "15px",
        }}
      />
      <h4
        className="text-2xl pt-5 pb-3 font-semibold"
        style={{ textAlign: "center" }}
      >
        {name}
      </h4>
    </div>
  );
};

export default Character;
