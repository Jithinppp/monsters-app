import React from "react";
import "./card-style.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?size=180x180`}
      ></img>
      <h4>{props.monster.name}</h4>
    </div>
  );
};
