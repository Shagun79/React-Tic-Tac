// Tictactoe.js
import React, { useState } from "react";
import { Square } from "./square";
import "./tictactoe.css";

export const Tictactoe = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setisXturn] = useState(true);
  console.log(state);

  const handleClick = (id) => {
    console.log("clicked" + " " + id);
    let copystate = [...state];

    copystate[id] = isXturn ? "X" : "O";
    setState(copystate);
    setisXturn(!isXturn);
  };

  const calculateWinner = () => {
    let condition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of condition) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a]; // Return the winning symbol
      }
    }
    return false;
  };

  const HandleReset = () => {
    setState(Array(9).fill(null));
  };

  const winner = calculateWinner();

  return (
    <>
      <h1 className="intro"> Welcome to the game!</h1>
      <div className="box">
        <h1> Tictac Toe</h1>

        {winner ? (
          <div>
            <p>
              {` Congo Player ${winner} won!`}{" "}
              <button onClick={HandleReset}> Reset </button>
            </p>
          </div>
        ) : (
          <div className="bord">
            <div className="row1">
              <Square value={state[0]} handleClick={handleClick} index={0} />
              <Square value={state[1]} handleClick={handleClick} index={1} />
              <Square value={state[2]} handleClick={handleClick} index={2} />
            </div>
            <div className="row2">
              <Square value={state[3]} handleClick={handleClick} index={3} />
              <Square value={state[4]} handleClick={handleClick} index={4} />
              <Square value={state[5]} handleClick={handleClick} index={5} />
            </div>
            <div className="row3">
              <Square value={state[6]} handleClick={handleClick} index={6} />
              <Square value={state[7]} handleClick={handleClick} index={7} />
              <Square value={state[8]} handleClick={handleClick} index={8} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
