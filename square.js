import React from "react";
import "./tictactoe.css";

export const Square = (props) => {
  return (
    <>
      <div
        className="square"
        onClick={() => {
          props.handleClick(props.index);
        }}
      >
        <h5>{props.value}</h5>
      </div>
    </>
  );
};
