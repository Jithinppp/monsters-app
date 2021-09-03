import React from "react";
import "./card-list-style.css";
import { Card } from "../card/Card-component";

export const CardList = (props) => {
  return (
    <div className="card__list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
