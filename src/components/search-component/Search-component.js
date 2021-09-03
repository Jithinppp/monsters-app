import React from "react";
import "./search-style.css";

export const Search = (props) => {
  return (
    <input
      className="input__search"
      type="search"
      placeholder={props.placeholder}
      onChange={props.ChangeHandler}
    ></input>
  );
};
